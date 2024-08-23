<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication;
use App\Http\Controllers\ServersController;

Route::prefix('auth')->controller(Authentication::class)->group(function () {
    Route::group(['middleware' => 'guest'], function () {
        Route::get('login', 'login')->name('login');
        Route::post('login', 'authenticate')->name('login.user');

        Route::get('register', 'register');
        Route::post('register', 'create')->name('create_user');
    });

    Route::get('logout', 'logout')->name('logout');
});

Route::prefix('client')->middleware('auth')->group(function () {
    Route::get('panel', function () {
        return Inertia::render('Client/Overview');
    })->name('client.panel');
});

Route::prefix('admin')->middleware(['web', 'auth'])->group(function () {

    Route::get('overview', function () {
        return Inertia::render('Admin/Overview');
    })->name('admin.home');
    
    Route::get('clients', function() {
        $user = User::select('id', 'forename', 'surname', 'email', 'created_at')->get();
        
        return Inertia::render('Admin/Clients/Index', [
            'clients' => $user
        ]);
    })->name('admin.clients');

    Route::inertia('settings', 'Admin/Settings/Settings')->name('admin.settings');

    Route::get('/settings/servers', [ServersController::class, 'ServersView'])->name('admin.servers.index');

    Route::get('/settings/servers/create', [ServersController::class, 'CreateView'])->name('admin.settings.servers.create');
    Route::post('/settings/servers/create', [ServersController::class, 'CreateServer']);
    Route::post('/settings/servers/test-connection', [ServersController::class, 'TestConnection']);
    Route::delete('/settings/servers/{server}', [ServersController::class, 'destroy'])->name('admin.settings.servers.delete');
    Route::get('/settings/servers/{server}', [ServersController::class, 'updateView'])->name('admin.settings.servers.update');
});

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');