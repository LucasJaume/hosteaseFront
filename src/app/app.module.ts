import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { HostDashboardComponent } from './home/host-dashboard/host-dashboard.component';
import { GuestDashboardComponent } from './home/guest-dashboard/guest-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    HostDashboardComponent,
    GuestDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
