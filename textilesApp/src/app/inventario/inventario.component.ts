import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private http: Http) {}

    public products =[];
    
    fetchData= function(){
        this.http.get('http://localhost:8000/products')
            .subscribe( (res: Response) => {
            this.products = res.json();
            console.log(this.products[0]);
        })
        }
        
 ngOnInit() {
    //this.getProducts();
      this.fetchData();
  }
} 