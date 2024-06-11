import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css'],
})
export class HostelsComponent {
  searchQuery = new FormControl('');
  hostels: Hostel[] = [
    { id: 1, nombre: 'Hostel 1', canton: 'Cantón 1', distrito: 'Distrito 1', comunidad: 'Comunidad 1', responsable: 'Responsable 1', capacidad: 50, contacto: 'contacto1@example.com' },
    { id: 2, nombre: 'Hostel 2', canton: 'Cantón 2', distrito: 'Distrito 2', comunidad: 'Comunidad 2', responsable: 'Responsable 2', capacidad: 30, contacto: 'contacto2@example.com' },
    { id: 3, nombre: 'Hostel 3', canton: 'Cantón 3', distrito: 'Distrito 3', comunidad: 'Comunidad 3', responsable: 'Responsable 3', capacidad: 40, contacto: 'contacto3@example.com' },
  ];
  filteredHostels: Hostel[] = [...this.hostels];
  isModalOpen = false;
  isDeleteModalOpen = false;
  isEditing = false;
  currentHostelId: number | null = null;
  hostelToDelete: Hostel | null = null;

  newNombre = new FormControl('', Validators.required);
  newCanton = new FormControl('', Validators.required);
  newDistrito = new FormControl('', Validators.required);
  newComunidad = new FormControl('', Validators.required);
  newResponsable = new FormControl('', Validators.required);
  newCapacidad = new FormControl('', [Validators.required, Validators.min(1)]);
  newContacto = new FormControl('', [Validators.required, Validators.email]);

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
    this.isEditing = false;
    this.currentHostelId = null;
    this.newNombre.setValue('');
    this.newCanton.setValue('');
    this.newDistrito.setValue('');
    this.newComunidad.setValue('');
    this.newResponsable.setValue('');
    this.newCapacidad.setValue('');
    this.newContacto.setValue('');
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveHostel() {
    if (this.isEditing && this.currentHostelId !== null) {
      const hostelItem = this.hostels.find(h => h.id === this.currentHostelId);
      if (hostelItem) {
        hostelItem.nombre = this.newNombre.value || '';
        hostelItem.canton = this.newCanton.value || '';
        hostelItem.distrito = this.newDistrito.value || '';
        hostelItem.comunidad = this.newComunidad.value || '';
        hostelItem.responsable = this.newResponsable.value || '';
        hostelItem.capacidad = Number(this.newCapacidad.value) || 0;
        hostelItem.contacto = this.newContacto.value || '';
        this.search();
        console.log('Albergue editado:', hostelItem);
      }
    } else {
      const newHostel: Hostel = {
        id: this.hostels.length + 1,
        nombre: this.newNombre.value || '',
        canton: this.newCanton.value || '',
        distrito: this.newDistrito.value || '',
        comunidad: this.newComunidad.value || '',
        responsable: this.newResponsable.value || '',
        capacidad: Number(this.newCapacidad.value) || 0,
        contacto: this.newContacto.value || ''
      };
      this.hostels.push(newHostel);
      this.search();
      console.log('Albergue agregado:', newHostel);
    }
    this.closeModal();
  }

  editHostel(hostel: Hostel) {
    this.isEditing = true;
    this.currentHostelId = hostel.id;
    this.newNombre.setValue(hostel.nombre);
    this.newCanton.setValue(hostel.canton);
    this.newDistrito.setValue(hostel.distrito);
    this.newComunidad.setValue(hostel.comunidad);
    this.newResponsable.setValue(hostel.responsable);
    this.newCapacidad.setValue(String(hostel.capacidad));
    this.newContacto.setValue(hostel.contacto);
    this.isModalOpen = true;
  }

  openDeleteModal(hostel: Hostel) {
    this.hostelToDelete = hostel;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.hostelToDelete = null;
  }

  confirmDelete() {
    if (this.hostelToDelete) {
      this.hostels = this.hostels.filter((h) => h.id !== this.hostelToDelete!.id);
      this.search();
      console.log('Albergue eliminado:', this.hostelToDelete);
      this.closeDeleteModal();
    }
  }
}
