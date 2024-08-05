<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication;

Route::prefix('auth')->controller(Authentication::class)->group(function () {
    Route::get('login', function () {
        return 'Hello';
    });

    Route::get('register', 'register');
});
