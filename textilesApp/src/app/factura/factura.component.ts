import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor(private http:Http) { }

    public facts =[];
    
    fetchData= function(){
        this.http.get('http://localhost:8000/ventas')
            .subscribe( (res: Response) => {
            this.facts = res.json();
          //  console.log(this.products[0]);
        })
        }

    
  ngOnInit() {
      this.fetchData();
  }

}
