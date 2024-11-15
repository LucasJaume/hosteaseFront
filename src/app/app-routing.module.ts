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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'host-dashboard', component: HostDashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'host' } },
  { path: 'guest-dashboard', component: GuestDashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'guest' } },
  { path: 'add-service', component: AddServiceComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'edit-service', component: EditServiceComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'delete-service', component: DeleteServiceComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
