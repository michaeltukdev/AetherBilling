<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function GeneralView()
    {
        return Inertia::render('Admin/Settings/General');
    }
}
