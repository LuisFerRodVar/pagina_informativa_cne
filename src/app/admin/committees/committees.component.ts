import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommitteesService } from '../../services/committee.service';

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
export class CommitteesComponent implements OnInit {
  searchQuery = new FormControl('');
  committees: Committee[] = [];
  filteredCommittees: Committee[] = [];
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

  constructor(private committeeService: CommitteesService) { }

  ngOnInit() {
    this.committeeService.getCommittees().subscribe(committees => {
      this.committees = committees;
      this.filteredCommittees = committees;
    });
  }

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
      const updatedCommittee: Partial<Committee> = {
        nombre: this.committeeForm.get('nombre')!.value ?? '',
        canton: this.committeeForm.get('canton')!.value ?? '',
        distrito: this.committeeForm.get('distrito')!.value ?? '',
        comunidad: this.committeeForm.get('comunidad')!.value ?? '',
        responsable: this.committeeForm.get('responsable')!.value ?? '',
        contacto: this.committeeForm.get('contacto')!.value ?? ''
      };
      this.committeeService.updateCommittees(this.currentCommitteeId, updatedCommittee).subscribe(() => {
        console.log('Comité editado:', updatedCommittee);
        this.search();
      });
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
      this.committeeService.addCommittees(newCommittee).then(() => {
        this.search();
        console.log('Comité agregado:', newCommittee);
      });
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
      this.committeeService.deleteCommittees(this.committeeToDelete.id).subscribe(() => {
        console.log('Comité eliminado:', this.committeeToDelete);
        this.closeDeleteModal();
        // Actualiza la lista de comités después de eliminar
        this.committeeService.getCommittees().subscribe(committees => {
          this.committees = committees;
          this.filteredCommittees = committees;
        });
      });
    }
  }
}

