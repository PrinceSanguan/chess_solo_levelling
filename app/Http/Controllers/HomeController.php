<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Welcome');
    }

    public function learn()
    {
        return Inertia::render('Learn');
    }

    public function liveClasses()
    {
        return Inertia::render('LiveClasses');
    }

    public function coaching()
    {
        return Inertia::render('Coaching');
    }
}
