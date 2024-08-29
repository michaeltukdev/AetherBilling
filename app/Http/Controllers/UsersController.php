<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::select('id', 'forename', 'surname', 'email', 'created_at')->get();
        
        return Inertia::render('Admin/Users/Index', [
            'users' => $users
        ]);
    }

    public function show(User $user)
    {
        return Inertia::render('Admin/Users/Show', [
            'user' => $user
        ]);
    }
}
