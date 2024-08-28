<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication;
use App\Http\Controllers\ProductsController;
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

        Route::prefix('products')->group(function () {
            Route::get('/', [ProductsController::class, 'index'])->name('admin.settings.products.index');

            // Create product groups

            // Update product groups

            // Delete product groups

            // Create products 

            // Update products

            // Delete products
        });

        Route::resource('servers', ServersController::class)->middleware('permission:view servers');

        Route::post('/servers/test-connection', [ServersController::class, 'testConnection'])
            ->name('admin.settings.servers.test-connection')
            ->middleware('permission:create servers');
    });
});

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');
