import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  searchQuery = new FormControl('');
  users: User[] = [
    { id: 1, name: 'Juanito', email: 'Correo@correo.com', role: 'admin' },
    { id: 2, name: 'Maria', email: 'maria@correo.com', role: 'user' },
    { id: 3, name: 'Pedro', email: 'pedro@correo.com', role: 'admin' },
  ];
  filteredUsers: User[] = [...this.users];
  isModalOpen = false;
  isDeleteModalOpen = false;
  isEditing = false;
  currentUserId: number | null = null;
  userToDelete: User | null = null;

  newUserName = new FormControl('', Validators.required);
  newUserEmail = new FormControl('', [Validators.required, Validators.email]);
  newUserRole = new FormControl('', Validators.required);

  search() {
    const query = this.searchQuery.value?.toLowerCase() || '';
    this.filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }

  addUser() {
    this.isEditing = false;
    this.currentUserId = null;
    this.newUserName.setValue('');
    this.newUserEmail.setValue('');
    this.newUserRole.setValue('');
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveUser() {
    if (this.isEditing && this.currentUserId !== null) {
      const user = this.users.find(u => u.id === this.currentUserId);
      if (user) {
        user.name = this.newUserName.value || '';
        user.email = this.newUserEmail.value || '';
        user.role = this.newUserRole.value || '';
        this.search();
        console.log('Usuario editado:', user);
      }
    } else {
      const newUser: User = {
        id: this.users.length + 1,
        name: this.newUserName.value || '',
        email: this.newUserEmail.value || '',
        role: this.newUserRole.value || ''
      };
      this.users.push(newUser);
      this.search();
      console.log('Usuario agregado:', newUser);
    }
    this.closeModal();
  }

  editUser(user: User) {
    this.isEditing = true;
    this.currentUserId = user.id;
    this.newUserName.setValue(user.name);
    this.newUserEmail.setValue(user.email);
    this.newUserRole.setValue(user.role);
    this.isModalOpen = true;
  }

  openDeleteModal(user: User) {
    this.userToDelete = user;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.userToDelete = null;
  }

  confirmDelete() {
    if (this.userToDelete) {
      this.users = this.users.filter((u) => u.id !== this.userToDelete!.id);
      this.search();
      console.log('Usuario eliminado:', this.userToDelete);
      this.closeDeleteModal();
    }
  }
}
