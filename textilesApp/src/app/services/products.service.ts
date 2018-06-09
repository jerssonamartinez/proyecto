import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../producto/producto.model';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }
   
    addProduct (product: Productos): Observable<Productos>{
        return this.http.post<Productos>('http://localhost:8000/products', product)
    }
    
    
    getProducts(): Observable<any>{
    return this.http.get('http://localhost:8000/products');
}
    
}
