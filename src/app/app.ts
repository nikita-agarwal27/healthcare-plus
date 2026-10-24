import { Component } from '@angular/core';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard';
import { LoginComponent } from './login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, AppointmentBookingComponent, DoctorDashboardComponent],
  template: `
    <header style="background:#0d6efd;color:white;padding:15px 25px">HealthCare+ - Your Health, Our Priority</header>
    <app-login></app-login>
    <app-appointment-booking></app-appointment-booking>
    <app-doctor-dashboard></app-doctor-dashboard>
  `
})
export class AppComponent {}