<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Authentication extends Controller
{
    public function test() {
        return 'helloadasdasd';
    }

    public function register() {
        return Inertia::render('Auth/Register');
    }
}
