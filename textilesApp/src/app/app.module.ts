import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import{ HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VentasComponent} from './Ventas/Ventas.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CalendarModule } from 'angular-calendar';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './factura/factura.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InventarioComponent } from './inventario/inventario.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { Productos } from './producto/producto.model';

import { UserService } from './services/user.service';
import { AuthguardGuard } from './authguard.guard';
 
const appRoutes = [
    { path: '', component: LoginFormComponent},
    { path: '', component: FacturaComponent},
    { path: '', component: ProductoComponent},
    { path: '', component: ProveedoresComponent},
    { path: '', component: InventarioComponent},
    { path: '', component: RegisterFormComponent},
    
                   {
                       canActivate: [AuthguardGuard],
                       path: 'ventas',
                       component: VentasComponent
                   },
    {
                       path: 'factura',
                       component: FacturaComponent
                   },
    {
                       path: 'producto',
                       component: ProductoComponent
                   },
    {
                       path: 'proveedores',
                       component: ProveedoresComponent
                   },
    {
                       path: 'inventario',
                       component: InventarioComponent
                   },
    {
                       path: 'register-form',
                       component: RegisterFormComponent
                   }
    
                  ];

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    LoginFormComponent,
    FacturaComponent,
    ProductoComponent,
    ProveedoresComponent,
    InventarioComponent,
    RegisterFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    CalendarModule.forRoot(),
    ShowHidePasswordModule.forRoot()

  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
