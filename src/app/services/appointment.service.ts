import { Injectable, signal } from '@angular/core';

export interface Appointment {
  id: number;
  patient: string;
  time: string;
  date: string;
  status: 'Pending' | 'Completed' | 'Cancelled';
  prescription?: string;
}

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  appointments = signal<Appointment[]>([
    { id: 1, patient: 'Amit', time: '10:00 AM', date: '2026-10-25', status: 'Pending', prescription: '' },
    { id: 2, patient: 'Neha', time: '11:00 AM', date: '2026-10-25', status: 'Pending', prescription: '' },
    { id: 3, patient: 'Raj', time: '02:00 PM', date: '2026-10-25', status: 'Completed', prescription: 'Paracetamol 500mg' },
  ]);

  updateStatus(id: number, status: Appointment['status'], notes: string) {
    this.appointments.update(list => list.map(a => a.id === id ? { ...a, status, prescription: notes } : a));
  }
}