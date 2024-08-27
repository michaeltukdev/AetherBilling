<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Settings/Products/Index');
    }
}
