import { Injectable, signal } from '@angular/core';

export interface Appointment {
  id: number;
  patient: string;
  time: string;
  date: string;
  status: 'Pending' | 'Completed' | 'Cancelled';
  prescription?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointments = signal<Appointment[]>([]);

  addAppointment(patient: string, time: string, date: string) {
    const newApp: Appointment = {
      id: Date.now(),
      patient: patient,
      time: time,
      date: date,
      status: 'Pending'
    };
    this.appointments.update(list => [...list, newApp]);
  }

  updateStatus(id: number, status: Appointment['status'], notes: string) {
    this.appointments.update(list => list.map(a => a.id === id ? { ...a, status, prescription: notes } : a));
  }
}