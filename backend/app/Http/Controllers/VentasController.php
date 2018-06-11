<?php

namespace App\Http\Controllers;

use App\Ventas;
use Illuminate\Http\Request;

class VentasController extends Controller
{
    function index(request $request)
    {
        
        $Ventas = Ventas::all();
        return response()->json($Ventas, 200);
        
    }
    function create(request $request)
    {
        $Ventas = Ventas::create($request->all());
        return response()->json($Ventas, 201);
        
    }
    
    public function __construct()
    {
        //
    }

    //
}
