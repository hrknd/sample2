<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class BookmarkController extends Controller
{
    public function index()
    {
        return Inertia::render('Bookmark/List/index');
    }
}
