import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private http:HttpClient) { }

    productObj:Object ={};
    
    createProduct = function(product){
       
        this.productObj= {
        "nombre": product.nombre,
        "presentacion": product.presentacion,
        "cantDisp": product.cantDisp,
        "precio": product.precio,
            }
        this.http.post("http://localhost:8000/products/", this.productObj)
        .subscribe((res:Response) => {console.log(res);
                  })
    }

  ngOnInit() {
  }

}
