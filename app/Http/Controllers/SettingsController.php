<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class SettingsController extends Controller
{
    public function GeneralView()
    {
        return Inertia::render('Admin/Settings/General');
    }
}
