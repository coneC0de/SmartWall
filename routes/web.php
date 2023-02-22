<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',function(){
    return Inertia::render('ListaKabineta');
})->name('/');

Route::get('/kreiranje-korisnika',function(){
    return Inertia::render('KreiranjeKorisnika');
})->name('/kreiranje-korisnika');

Route::get('/kreiranje-kabineta',function(){
    return Inertia::render('KreiranjeKabineta');
})->name('/kreiranje-kabineta');

Route::get('/kreiranje-predmeta',function(){
    return Inertia::render('KreiranjePredmeta');
})->name('/kreiranje-predmeta');

Route::get('/kreiranje-odeljenja',function(){
    return Inertia::render('KreiranjeOdeljenja');
})->name('/kreiranje-odeljenja');


require __DIR__ . '/auth.php';