<?php

use App\Http\Controllers\Api\DeveloperController;
use App\Http\Controllers\Api\LevelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return response()->json([
        "Home" => "Olá, seja bem vindo ao meu teste Full Stack para a Gazin Tech"
    ]);
});

Route::apiResource('/levels', LevelController::class);

Route::apiResource('/developers', DeveloperController::class);
