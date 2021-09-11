<?php

namespace App\Core\Services\Weather;

use Illuminate\Support\Facades\Http;

class GetWeatherByPosition
{
    public function execute($lat, $lon)
    {
        $response = Http::get('api.openweathermap.org/data/2.5/find', [
            'lat' => $lat,
            'lon' => $lon,
            'appid' => config('weather.app-id')
        ]);

        return $response->json();
    }
}