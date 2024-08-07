<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication;

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

Route::prefix('admin')->middleware('auth')->group(function () {
    
    Route::get('overview', function () {
        return Inertia::render('Admin/Overview', [
            'user' => [
                'name' => auth()->user()->forename . ' ' . auth()->user()->surname,
                'email' => auth()->user()->email,
                'avatar' => auth()->user()->avatar_url,
            ],
        ]);
    })->name('admin.home');

    Route::get('clients', function () {
        return Inertia::render('Admin/Clients');
    })->name('admin.clients');

});