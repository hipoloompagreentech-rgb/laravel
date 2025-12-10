<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta Home
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Ruta Galery
Route::get('/galery', function () {
    return Inertia::render('Galery');
})->name('galery');

// Ruta Who We Are
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Ruta Contact
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
