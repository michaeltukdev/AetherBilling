<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication;

Route::prefix('auth')->controller(Authentication::class)->group(function () {
    Route::get('login', function () {
        return 'Hello';
    })->name('login');

    Route::get('register', 'register');

    Route::post('register', 'create')->name('create_user');
});

Route::prefix('client')->middleware('auth')->group(function () {
    Route::get('panel', function () {
        return Inertia::render('Client/Panel');
    });
});