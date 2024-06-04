import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  searchQuery = new FormControl('');
  users: User[] = [
    { id: 1, name: 'Juanito', email: 'Correo@correo.com', role: 'admin' },
    { id: 2, name: 'Maria', email: 'maria@correo.com', role: 'user' },
    { id: 3, name: 'Pedro', email: 'pedro@correo.com', role: 'admin' },
  ];
  filteredUsers: User[] = [...this.users];

  search() {
    /** 
     * this.filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    */
    
  }

  addUser() {
    const newUser: User = {
      id: this.users.length + 1,
      name: 'Nuevo Usuario',
      email: `nuevo${this.users.length + 1}@correo.com`,
      role: 'user',
    };
    this.users.push(newUser);
    this.search(); // Update the filtered list after adding a new user
    console.log('Agregar usuario:', newUser);
  }

  editUser(user: User) {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = { ...user, name: user.name + ' (Editado)' };
      this.search(); // Update the filtered list after editing a user
      console.log('Editar usuario:', user);
    }
  }

  deleteUser(user: User) {
    this.users = this.users.filter((u) => u.id !== user.id);
    this.search(); // Update the filtered list after deleting a user
    console.log('Eliminar usuario:', user);
  }
}
