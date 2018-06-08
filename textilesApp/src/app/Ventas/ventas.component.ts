import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({

    selector: 'ventas',
    templateUrl: './ventas.component.html',
    styleUrls: ['./ventas.component.css']

})

export class VentasComponent{

public titulo = 'Ventas AdminText';

    public nombre = 'REGISTRO DE VENTAS';
    public label1 = 'Fecha Venta';
    public label2 = 'Cantidad';
    public label3 = 'Id Factura';
    public label4 = 'Usuario';
    public label5 = 'Producto';
    public label6 = 'Precio';
    public listado_productos = ['Seda', 'Licra', 'Dril', 'Encaje'];
    public listado_prec = ['precio1', 'precio2'];
    public boton1 = 'Registrar';
    
constructor(private user: UserService){

console.log(this.listado_productos);
console.log(this.listado_prec);

}
createImage(image){
    console.log(image);
}
}