<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication;
use App\Http\Controllers\ServersController;
use App\Http\Controllers\SettingsController;

Route::prefix('auth')->controller(Authentication::class)->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('login', 'login')->name('login');
        Route::post('login', 'authenticate')->name('login.user');
        Route::get('register', 'register');
        Route::post('register', 'create')->name('create_user');
    });

    Route::get('logout', 'logout')->name('logout');
});

Route::middleware('auth')->group(function () {
    Route::prefix('client')->group(function () {
        Route::get('panel', function () {
            return Inertia::render('Client/Overview');
        })->name('client.panel');
    });
});

Route::prefix('admin')->middleware('permission:access admin panel')->group(function () {
    Route::get('/', function () {
        $users = User::select('id', 'forename', 'surname', 'email', 'created_at')->orderBy('created_at', 'desc')->limit(5)->get();

        return Inertia::render('Admin/Overview', [
            'users' => $users,
        ]);
    })->name('admin.home');

    Route::prefix('clients')->middleware('permission:view users|manage users')->group(function () {
        Route::get('/', function () {
            $user = User::select('id', 'forename', 'surname', 'email', 'created_at')->get();
            return Inertia::render('Admin/Clients/Index', ['clients' => $user]);
        })->name('admin.clients');
    });

    Route::prefix('settings')->group(function () {

        Route::inertia('/', 'Admin/Settings/Index')->name('admin.settings');

        Route::get('/general', [SettingsController::class, 'GeneralView'])->name('admin.settings.general');

        Route::prefix('servers')->middleware('permission:view servers')->group(function () {

            Route::get('/', [ServersController::class, 'ServersView'])->name('admin.servers.index');

            Route::get('create', [ServersController::class, 'CreateView'])
                ->name('admin.settings.servers.create')
                ->middleware('permission:create servers');

            Route::post('create', [ServersController::class, 'CreateServer'])
                ->name('admin.settings.servers.create')
                ->middleware('permission:create servers');

            Route::post('test-connection', [ServersController::class, 'TestConnection'])
                ->name('admin.settings.servers.test-connection')
                ->middleware('permission:create servers');

            Route::delete('{server}', [ServersController::class, 'destroy'])
                ->name('admin.settings.servers.delete')
                ->middleware('permission:delete servers');

            Route::get('{server}', [ServersController::class, 'updateView'])
                ->name('admin.settings.servers.update')
                ->middleware('permission:edit servers');

            Route::put('/{server}', [ServersController::class, 'update'])
                ->name('admin.settings.servers.update')
                ->middleware('permission:edit servers');
        });
    });
});

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');
