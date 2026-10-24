import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-booking',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div style="padding:20px; border:2px solid green;">
    <h2>Appointment Booking Works!</h2>
    <p>Today: {{todayCount}} | Total: {{totalCount}} | Pending: {{pendingCount}}</p>
    <div *ngFor="let a of appointments">{{a}}</div>
  </div>
  `
})
export class AppointmentBookingComponent {
  todayCount = 2;
  totalCount = 10;
  pendingCount = 3;
  appointments = ['Amit - 10AM', 'Neha - 11AM', 'Raj - 2PM'];
}