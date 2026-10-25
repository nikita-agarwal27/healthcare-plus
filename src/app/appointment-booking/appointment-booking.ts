import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div style="padding:20px; border:1px solid #ccc">
    <h3>Appointment Booking</h3>
    <input [(ngModel)]="newPatientName" placeholder="Patient naam" />
    <input [(ngModel)]="newTime" placeholder="Time ex: 10AM" />
    <button (click)="addAppointment()">Add</button>
    <div *ngFor="let a of appointments">
      {{a.patient}} - {{a.time}} - {{a.status}}
    </div>
  </div>
  `,
  styleUrl: './appointment-booking.css'
})
export class AppointmentBookingComponent {
  newPatientName = '';
  newTime = '';
  todayCount = 0;
  totalCount = 0;
  pendingCount = 0;

  constructor(public appointmentService: AppointmentService) {}

  addAppointment(){
    if(this.newPatientName && this.newTime){
      this.appointmentService.addAppointment(this.newPatientName, this.newTime, new Date().toISOString().split('T')[0]);
      this.newPatientName = '';
      this.newTime = '';
      this.todayCount++;
      this.totalCount++;
      this.pendingCount++;
    }
  }

  get appointments() {
    return this.appointmentService.appointments();
  }
}