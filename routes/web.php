<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication;
use App\Models\Module;
use App\Services\ModuleService;
use App\Models\Server;

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

    Route::get('clients', function () {
        return Inertia::render('Admin/Clients');
    })->name('admin.clients');

    Route::inertia('settings', 'Admin/Settings/Settings')->name('admin.settings');
});

Route::get('/', function () {
    $module = Module::where('name', 'Pterodactyl')->first();

    if ($module) {

        $server = Server::where('id', 1)->first();
        
        $moduleService = new ModuleService();
        $module = $moduleService->getModuleForServer($server);
        $serverInfo = $module->makeApiCall('/api/application/servers');
    }

    return Inertia::render('Welcome', [
        'module' => Module::all(),
        'serverInfo' => $serverInfo ?? null
    ]);
})->name('home');
