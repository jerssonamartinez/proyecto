import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  restItems: any;
  restItemsUrl = 'https://localhost:800/products';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    //this.getProducts();
      this.fetchData();
  }
    products =[];
    
    fetchData= function(){
        this.http.get('http://localhost:8000/products').subscribe(
        (res: Response) => {
            this.products = res.json();
        })
    }
    
    
  // Read all REST Items
/*  getProducts(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }*/
}