import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  standalone: true,
  imports: [],
  templateUrl: './committees.component.html',
  styleUrl: './committees.component.css'
})
export class CommitteesComponent {
  searchQuery = new FormControl('');
  showRegistrationForm: boolean = false;
  committees: Committee[] = [
    { id: 1, nombre: 'Comité 1', canton: 'Cantón 1', distrito: 'Distrito 1', comunidad: 'Comunidad 1', responsable: 'Responsable 1', contacto: '123456789' },
    { id: 2, nombre: 'Comité 2', canton: 'Cantón 2', distrito: 'Distrito 2', comunidad: 'Comunidad 2', responsable: 'Responsable 2', contacto: '987654321' },
    { id: 3, nombre: 'Comité 3', canton: 'Cantón 3', distrito: 'Distrito 3', comunidad: 'Comunidad 3', responsable: 'Responsable 3', contacto: '456789123' },
  ];
  filteredCommittees: Committee[] = [...this.committees];

  search() {
    const query = this.searchQuery.value?.toLowerCase() || '';
    this.filteredCommittees = this.committees.filter(
      (committee) =>
        committee.nombre.toLowerCase().includes(query) ||
        committee.canton.toLowerCase().includes(query) ||
        committee.distrito.toLowerCase().includes(query) ||
        committee.comunidad.toLowerCase().includes(query) ||
        committee.responsable.toLowerCase().includes(query)
    );
  }

  addCommittee() {
    this.showRegistrationForm = true;
  }

  onCommitteeRegistered(newCommittee: Committee) {
    newCommittee.id = this.committees.length + 1;
    this.committees.push(newCommittee);
    this.search(); // Update the filtered list after adding a new committee
    this.showRegistrationForm = false;
  }

  closeModal() {
    this.showRegistrationForm = false;
  }

  editCommittee(committee: Committee) {
    const index = this.committees.findIndex((c) => c.id === committee.id);
    if (index !== -1) {
      this.committees[index] = { ...committee, nombre: committee.nombre + ' (Editado)' };
      this.search(); // Update the filtered list after editing a committee
      console.log('Editar comité:', committee);
    }
  }

  deleteCommittee(committee: Committee) {
    this.committees = this.committees.filter((c) => c.id !== committee.id);
    this.search(); // Update the filtered list after deleting a committee
    console.log('Eliminar comité:', committee);
  }

}
