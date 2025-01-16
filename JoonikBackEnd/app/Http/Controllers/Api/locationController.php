<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Location;

class locationController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $locations = Location::all();

        if ($locations->isEmpty()) {
            $data = [
                'message' => 'No se encontraron Sedes',
                'status' => 404,
            ];

            return response()->json($data, 404);
        }

        $data = [
            'locations' => $locations,
            'status' => 200,
        ];

        return response()->json($data, 200);
    }

    public function loadLocations(): \Illuminate\Http\JsonResponse
    {

        $simulatedData = [
            [
                'id' => 1,
                'name' => 'Valledupar',
                'image' => 'https://picsum.photos/200/300',
            ],
            [
                'id' => 2,
                'name' => 'Barrannquilla',
                'image' => 'https://picsum.photos/200/300',
            ],
            [
                'id' => 3,
                'name' => 'Bogota',
                'image' => 'https://picsum.photos/2/3',
            ],
        ];

        foreach ($simulatedData as $data) {
            Location::UpdateOrCreate(['id' => $data['id']], $data);
        }

        return response()->json(['message' => 'Data inserted successfully']);

    }
}
