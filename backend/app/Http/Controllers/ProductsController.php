<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    function index(request $request)
    {
        
        $Products = Product::all();
        return response()->json($Products, 200);
        
    }

    function create(request $request){
        
        $Product = Product::create($request->all());
        return response()->json($Product, 201);
        
        /*$Product = new product();
        $Product->nombre=$request->input('nombre');
        $Product->presentacion=$request->input('presentacion');
        $Product->cantDisp=$request->input('cantDisp');
        $Product->precio=$request->input('precio');
        
        try{
            if($Product->save()){
                return response()->json([],201);
            }
        }catch(exception $e){
            return response()->json([],500);
        }*/
    }
}
