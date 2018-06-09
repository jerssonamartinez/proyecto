<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    function index(request $request)
    {
        
        $users = User::all();
        
        return response()->json([$users], 200);
       
    }

    
    function create(request $request){
        
        $user = new user();
        $user->usuario=$request->input('usuario');
        $user->password=$request->input('password');
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
