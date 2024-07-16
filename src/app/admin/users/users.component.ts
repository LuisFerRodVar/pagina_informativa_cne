import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

interface User {
  id?: string;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  searchQuery = new FormControl('');
  users: User[] = [];
  filteredUsers: User[] = [];
  isModalOpen = false;
  isDeleteModalOpen = false;
  isEditing = false;
  currentUserId: string | null = null;
  userToDelete: User | null = null;

  newUserName = new FormControl('', Validators.required);
  newUserEmail = new FormControl('', [Validators.required, Validators.email]);
  newUserRole = new FormControl('', Validators.required);

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  search() {
    const query = this.searchQuery.value?.toLowerCase() || '';
    this.filteredUsers = this.users.filter(
      user =>
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
      const updatedUser: Partial<User> = {
        name: this.newUserName.value || '',
        email: this.newUserEmail.value || '',
        role: this.newUserRole.value || ''
      };
      this.usersService.updateUser(this.currentUserId, updatedUser).then(() => {
        console.log('Usuario editado:', updatedUser);
      });
    } else {
      const newUser: User = {
        name: this.newUserName.value || '',
        email: this.newUserEmail.value || '',
        role: this.newUserRole.value || ''
      };
      this.usersService.addUser(newUser).then(() => {
        console.log('Usuario agregado:', newUser);
      });
    }
    this.closeModal();
  }

  editUser(user: User) {
    this.isEditing = true;
    this.currentUserId = user.id!;
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
    if (this.userToDelete && this.userToDelete.id) {
      this.usersService.deleteUser(this.userToDelete.id).then(() => {
        console.log('Usuario eliminado:', this.userToDelete);
      });
      this.closeDeleteModal();
    }
  }
}
