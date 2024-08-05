<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Authentication extends Controller
{
    protected function rules()
    {
        return [
            'forename' => ['required', 'string', 'max:50'],
            'surname' => ['required', 'string', 'max:50'],
            'email' => ['required', 'email', 'max:255', 'unique:users'],
            'phoneNumber' => [
                'nullable', 
                'string',
                // 'regex:/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/'
            ],
            'password' => [
                'required',
                'string',
                'min:8',
                // 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/',
                'confirmed'
            ],
            'addressLine1' => ['required', 'string', 'max:255'],
            'addressLine2' => ['nullable', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:100'],
            'state' => ['required', 'string', 'max:100'],
            'postalCode' => ['required', 'string', 'max:20'],
            'country' => ['required', 'string', 'max:100'],
        ];
    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    public function create(Request $request)
    {
        $validated = $request->validate($this->rules());
        
        $validated['registration_ip'] = $request->ip();
    
        $user = User::create($validated);
        
        Auth::login($user);
    
        return redirect()->route('client.panel');
    }
}
