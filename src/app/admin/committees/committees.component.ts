import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Committee {
  id: number;
  nombre: string;
  canton: string;
  distrito: string;
  comunidad: string;
  responsable: string;
  contacto: string;
}

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})
export class CommitteesComponent {
  searchQuery = new FormControl('');
  committees: Committee[] = [
    { id: 1, nombre: 'Comité 1', canton: 'Cantón 1', distrito: 'Distrito 1', comunidad: 'Comunidad 1', responsable: 'Responsable 1', contacto: 'contacto1@example.com' },
    { id: 2, nombre: 'Comité 2', canton: 'Cantón 2', distrito: 'Distrito 2', comunidad: 'Comunidad 2', responsable: 'Responsable 2', contacto: 'contacto2@example.com' },
    { id: 3, nombre: 'Comité 3', canton: 'Cantón 3', distrito: 'Distrito 3', comunidad: 'Comunidad 3', responsable: 'Responsable 3', contacto: 'contacto3@example.com' },
  ];
  filteredCommittees: Committee[] = [...this.committees];
  isModalOpen = false;
  isDeleteModalOpen = false;
  isEditing = false;
  currentCommitteeId: number | null = null;
  committeeToDelete: Committee | null = null;

  committeeForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    canton: new FormControl('', Validators.required),
    distrito: new FormControl('', Validators.required),
    comunidad: new FormControl('', Validators.required),
    responsable: new FormControl('', Validators.required),
    contacto: new FormControl('', [Validators.required, Validators.email]),
  });

  search() {
    const query = this.searchQuery.value?.toLowerCase() || '';
    this.filteredCommittees = this.committees.filter(
      (committee) =>
        committee.nombre.toLowerCase().includes(query) ||
        committee.canton.toLowerCase().includes(query) ||
        committee.distrito.toLowerCase().includes(query) ||
        committee.comunidad.toLowerCase().includes(query) ||
        committee.responsable.toLowerCase().includes(query) ||
        committee.contacto.toLowerCase().includes(query)
    );
  }

  addCommittee() {
    this.isEditing = false;
    this.currentCommitteeId = null;
    this.committeeForm.reset();
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveCommittee() {
    if (this.committeeForm.invalid) {
      return;
    }
    if (this.isEditing && this.currentCommitteeId !== null) {
      const committeeItem = this.committees.find(c => c.id === this.currentCommitteeId);
      if (committeeItem) {
        committeeItem.nombre = this.committeeForm.get('nombre')!.value ?? '';
        committeeItem.canton = this.committeeForm.get('canton')!.value ?? '';
        committeeItem.distrito = this.committeeForm.get('distrito')!.value ?? '';
        committeeItem.comunidad = this.committeeForm.get('comunidad')!.value ?? '';
        committeeItem.responsable = this.committeeForm.get('responsable')!.value ?? '';
        committeeItem.contacto = this.committeeForm.get('contacto')!.value ?? '';
        this.search();
        console.log('Comité editado:', committeeItem);
      }
    } else {
      const newCommittee: Committee = {
        id: this.committees.length + 1,
        nombre: this.committeeForm.get('nombre')!.value ?? '',
        canton: this.committeeForm.get('canton')!.value ?? '',
        distrito: this.committeeForm.get('distrito')!.value ?? '',
        comunidad: this.committeeForm.get('comunidad')!.value ?? '',
        responsable: this.committeeForm.get('responsable')!.value ?? '',
        contacto: this.committeeForm.get('contacto')!.value ?? ''
      };
      this.committees.push(newCommittee);
      this.search();
      console.log('Comité agregado:', newCommittee);
    }
    this.closeModal();
  }

  editCommittee(committee: Committee) {
    this.isEditing = true;
    this.currentCommitteeId = committee.id;
    this.committeeForm.setValue({
      nombre: committee.nombre,
      canton: committee.canton,
      distrito: committee.distrito,
      comunidad: committee.comunidad,
      responsable: committee.responsable,
      contacto: committee.contacto
    });
    this.isModalOpen = true;
  }

  openDeleteModal(committee: Committee) {
    this.committeeToDelete = committee;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.committeeToDelete = null;
  }

  confirmDelete() {
    if (this.committeeToDelete) {
      this.committees = this.committees.filter((c) => c.id !== this.committeeToDelete!.id);
      this.search();
      console.log('Comité eliminado:', this.committeeToDelete);
      this.closeDeleteModal();
    }
  }
}

