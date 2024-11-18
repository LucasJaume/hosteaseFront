import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { HostDashboardComponent } from './home/host-dashboard/host-dashboard.component';
import { GuestDashboardComponent } from './home/guest-dashboard/guest-dashboard.component';
import { AddServiceComponent } from './admin/add-service/add-service.component';
import { EditServiceComponent } from './admin/edit-service/edit-service.component';
import { DeleteServiceComponent } from './admin/delete-service/delete-service.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatIconModule } from '@angular/material/icon';
import { AltaHospedajeComponent } from './alta-hospedaje/alta-hospedaje.component';
import { ModifarHospedajeComponent } from './modifar-hospedaje/modifar-hospedaje.component';
import { EliminarHospedajeComponent } from './eliminar-hospedaje/eliminar-hospedaje.component';
import { ReservarHospedajeComponent } from './reservar-hospedaje/reservar-hospedaje.component';
import { ModificarReservaComponent } from './modificar-reserva/modificar-reserva.component';
import { CancelarReservaComponent } from './cancelar-reserva/cancelar-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    HostDashboardComponent,
    GuestDashboardComponent,
    AddServiceComponent,
    EditServiceComponent,
    DeleteServiceComponent,
    AltaHospedajeComponent,
    ModifarHospedajeComponent,
    EliminarHospedajeComponent,
    ReservarHospedajeComponent,
    ModificarReservaComponent,
    CancelarReservaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
