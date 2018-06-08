<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    function index(request $request)
    {
        if($request->isJson()){
        $users = User::all();
        
        return response()->json([$users], 200);
        }
        return response()->json(['error' => 'Unauthorized'], 401, []);
    }

    
    function create(request $request){
        
        $user = new user();
        $user->usuario=$request->input('usuario');
        $user->contraseña=$request->input('contraseña');
        $user->nombre=$request->input('nombre');
        $user->email=$request->input('email');
        $user->telefono=$request->input('telefono');
        $user->direccion=$request->input('direccion');
        
        try{
            if($user->save()){
                return response()->json([],201);
            }
        }catch(exception $e){
            return response()->json([],500);
        }
    }
}
