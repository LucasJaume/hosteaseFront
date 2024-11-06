import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { HostDashboardComponent } from './home/host-dashboard/host-dashboard.component';
import { GuestDashboardComponent } from './home/guest-dashboard/guest-dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'host-dashboard', component: HostDashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'host' } },
  { path: 'guest-dashboard', component: GuestDashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'guest' } },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
