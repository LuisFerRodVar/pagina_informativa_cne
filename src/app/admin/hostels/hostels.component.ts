import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HostelsRegistrationComponent } from './hostels-registration/hostels-registration.component';

interface Hostel {
  id: number;
  nombre: string;
  canton: string;
  distrito: string;
  comunidad: string;
  responsable: string;
  capacidad: number;
  contacto: string;
}

@Component({
  selector: 'app-hostels',
  standalone: true,
  imports: [HostelsRegistrationComponent],
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css']
})
export class HostelsComponent {
  searchQuery = new FormControl('');
  showRegistrationForm: boolean = false;
  hostels: Hostel[] = [
    { id: 1, nombre: 'Hostel 1', canton: 'Cantón 1', distrito: 'Distrito 1', comunidad: 'Comunidad 1', responsable: 'Responsable 1', capacidad: 50, contacto: '123456789' },
    { id: 2, nombre: 'Hostel 2', canton: 'Cantón 2', distrito: 'Distrito 2', comunidad: 'Comunidad 2', responsable: 'Responsable 2', capacidad: 30, contacto: '987654321' },
    { id: 3, nombre: 'Hostel 3', canton: 'Cantón 3', distrito: 'Distrito 3', comunidad: 'Comunidad 3', responsable: 'Responsable 3', capacidad: 40, contacto: '456789123' },
  ];
  filteredHostels: Hostel[] = [...this.hostels];

  search() {
    const query = this.searchQuery.value?.toLowerCase() || '';
    this.filteredHostels = this.hostels.filter(
      (hostel) =>
        hostel.nombre.toLowerCase().includes(query) ||
        hostel.canton.toLowerCase().includes(query) ||
        hostel.distrito.toLowerCase().includes(query) ||
        hostel.comunidad.toLowerCase().includes(query) ||
        hostel.responsable.toLowerCase().includes(query)
    );
  }

  addHostel() {
    this.showRegistrationForm = true;
  }

  onHostelRegistered(newHostel: Hostel) {
    newHostel.id = this.hostels.length + 1;
    this.hostels.push(newHostel);
    this.search(); // Update the filtered list after adding a new hostel
    this.showRegistrationForm = false;
  }

  closeModal() {
    this.showRegistrationForm = false;
  }

  editHostel(hostel: Hostel) {
    const index = this.hostels.findIndex((h) => h.id === hostel.id);
    if (index !== -1) {
      this.hostels[index] = { ...hostel, nombre: hostel.nombre + ' (Editado)' };
      this.search(); // Update the filtered list after editing a hostel
      console.log('Editar hostel:', hostel);
    }
  }

  deleteHostel(hostel: Hostel) {
    this.hostels = this.hostels.filter((h) => h.id !== hostel.id);
    this.search(); // Update the filtered list after deleting a hostel
    console.log('Eliminar hostel:', hostel);
  }
}