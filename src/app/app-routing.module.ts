import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { HostDashboardComponent } from './home/host-dashboard/host-dashboard.component';
import { GuestDashboardComponent } from './home/guest-dashboard/guest-dashboard.component';
import { AddServiceComponent } from './admin/add-service/add-service.component';
import { EditServiceComponent } from './admin/edit-service/edit-service.component';
import { DeleteServiceComponent } from './admin/delete-service/delete-service.component';
import { AuthGuard } from './guards/auth.guard';
import { ReservarHospedajeComponent } from './reservar-hospedaje/reservar-hospedaje.component';
import { ModificarReservaComponent } from './modificar-reserva/modificar-reserva.component';
import { CancelarReservaComponent } from './cancelar-reserva/cancelar-reserva.component';
import { AltaHospedajeComponent } from './alta-hospedaje/alta-hospedaje.component';
import { ModifarHospedajeComponent } from './modifar-hospedaje/modifar-hospedaje.component';
import { EliminarHospedajeComponent } from './eliminar-hospedaje/eliminar-hospedaje.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'host-dashboard', component: HostDashboardComponent, canActivate: [AuthGuard] },
  { path: 'guest-dashboard', component: GuestDashboardComponent, canActivate: [AuthGuard] },
  { path: 'add-service', component: AddServiceComponent, canActivate: [AuthGuard] },
  { path: 'edit-service', component: EditServiceComponent, canActivate: [AuthGuard] },
  { path: 'delete-service', component: DeleteServiceComponent, canActivate: [AuthGuard] },
  { path: 'reservar-hospedaje', component: ReservarHospedajeComponent, canActivate: [AuthGuard] },
  { path: 'modificar-reserva', component: ModificarReservaComponent, canActivate: [AuthGuard] },
  { path: 'cancelar-reserva', component: CancelarReservaComponent, canActivate: [AuthGuard] },
  { path: 'crear-hospedaje', component: AltaHospedajeComponent, canActivate: [AuthGuard] },
  { path: 'modificar-hospedaje', component: ModifarHospedajeComponent, canActivate: [AuthGuard] },
  { path: 'eliminar-hospedaje', component: EliminarHospedajeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
