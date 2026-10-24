import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div style="padding:20px;font-family:sans-serif">
    <h2>Doctor Dashboard - Daily Schedule</h2>
    <input type="date" [ngModel]="selectedDate()" (ngModelChange)="selectedDate.set($event)" style="padding:8px;margin:10px 0"/>

    <div style="display:flex;gap:15px;margin:15px 0">
      <div style="background:#e3f2fd;padding:15px;border-radius:8px">Today: {{todayCount()}}</div>
      <div style="background:#e8f5e9;padding:15px;border-radius:8px">Total: {{service.appointments().length}}</div>
      <div style="background:#fff3e0;padding:15px;border-radius:8px">Pending: {{pendingCount()}}</div>
    </div>

    <table border="1" style="width:100%;border-collapse:collapse">
      <tr style="background:#0d6efd;color:white"><th>Time</th><th>Patient</th><th>Status</th><th>Prescription Notes</th><th>Action</th></tr>
      <tr *ngFor="let a of filtered()">
        <td>{{a.time}}</td><td>{{a.patient}}</td>
        <td>
          <select [ngModel]="a.status" (ngModelChange)="service.updateStatus(a.id, $event, a.prescription||'')">
            <option>Pending</option><option>Completed</option><option>Cancelled</option>
          </select>
        </td>
        <td><textarea [(ngModel)]="a.prescription" placeholder="Write prescription..." style="width:95%"></textarea></td>
        <td><button (click)="service.updateStatus(a.id, a.status, a.prescription||'')" style="background:#198754;color:white;border:none;padding:6px 10px;border-radius:4px">Save</button></td>
      </tr>
    </table>
  </div>
  `
})
export class DoctorDashboardComponent {
  service = inject(AppointmentService);
  selectedDate = signal('2026-10-25');
  filtered = computed(() => this.service.appointments().filter(a => a.date === this.selectedDate()));
  todayCount = computed(() => this.filtered().length);
  pendingCount = computed(() => this.service.appointments().filter(a => a.status === 'Pending').length);
}