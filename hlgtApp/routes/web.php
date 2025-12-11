<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route Home
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Route Galery
Route::get('/galery', function () {
    return Inertia::render('Galery');
})->name('galery');

// Route Who We Are
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Route Contact
Route::get('/Contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// Route Terms
Route::get('/termsandconditions', function () {
    return Inertia::render('termsandconditions');
})->name('terms');

// Route Policy
Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy');