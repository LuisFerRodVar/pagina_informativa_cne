
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HostelsService } from '../../services/hostel.service';

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
export class HostelsComponent implements OnInit {
  searchQuery = new FormControl('');
  hostels: Hostel[] = [];
  filteredHostels: Hostel[] = [];
  isModalOpen = false;
  isDeleteModalOpen = false;
  isEditing = false;
  currentHostelId: number | null = null;
  hostelToDelete: Hostel | null = null;

  constructor(private hostelService: HostelsService) { }

  ngOnInit() {
    this.hostelService.getHostels().subscribe(hostels => {
      this.hostels = hostels;
      this.filteredHostels = hostels;
    });
  }

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
      const updatedHostel: Partial<Hostel> = {
        nombre: this.newNombre.value || '',
        canton: this.newCanton.value || '',
        distrito: this.newDistrito.value || '',
        comunidad: this.newComunidad.value || '',
        responsable: this.newResponsable.value || '',
        capacidad: Number(this.newCapacidad.value) || 0,
        contacto: this.newContacto.value || ''
      };
      this.hostelService.updateHostels(this.currentHostelId, updatedHostel).subscribe(() => {
        console.log('Albergue editado:', hostelItem);
        this.search();
      });
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
    this.hostelService.addHostels(newHostel).then(() => {
      this.search();
      console.log('Albergue agregado:', newHostel);
    });
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
      this.hostelService.deleteHostels(this.hostelToDelete.id).subscribe(() => {
        console.log('Albergue eliminado:', this.hostelToDelete);
        this.closeDeleteModal();
        // Actualiza la lista de hostels después de eliminar
        this.hostelService.getHostels().subscribe(hostels => {
          this.hostels = hostels;
          this.filteredHostels = hostels;
        });
      });
    }
  }
}

