<?php

use App\Http\Controllers\Api\locationController;
use Illuminate\Support\Facades\Route;

Route::middleware(\App\Http\Middleware\ApiKeyIsValid::class)->group(function () {
    Route::get('/locations', [locationController::class, 'index']);
    Route::get('/load-locations', [locationController::class, 'loadLocations']);
});
