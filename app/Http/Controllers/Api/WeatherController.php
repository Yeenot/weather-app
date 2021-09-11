<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\Services\Weather\GetWeatherByPosition;

class WeatherController extends Controller
{
    
    public function __invoke(Request $request, GetWeatherByPosition $getWeatherByPosition)
    {
        $lat = $request->query('lat');
        $lon = $request->query('lon');
        return $getWeatherByPosition->execute($lat, $lon);
    }
}
