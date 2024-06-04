import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface New {
  id: number;
  title: string;
  date: string;
  description: string;
}
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {
  searchQuery = new FormControl('');
  news: New[] = [
    { id: 1, title: 'Informacion general', date: '24/05/2024', description: 'Los sucesos se encuentran en desarrollo' },
    { id: 1, title: 'Informacion general', date: '24/05/2024', description: 'Los sucesos se encuentran en desarrollo' },
    { id: 1, title: 'Informacion general', date: '24/05/2024', description: 'Los sucesos se encuentran en desarrollo' },
  ];
  filteredUsers: New[] = [...this.news];

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
    const newUser: New = {
      id: this.news.length + 1,
      title: 'Nuevo Noticia',
      date: `${this.news.length + 1}/05/2024`,
      description: 'Esta es una descripcion',
    };
    this.news.push(newUser);
    this.search(); // Update the filtered list after adding a new user
    console.log('Agregar usuario:', newUser);
  }

  editUser(news: New) {
    const index = this.news.findIndex((u) => u.id === news.id);
    if (index !== -1) {
      this.news[index] = { ...news, title: news.title + ' (Editado)' };
      this.search(); // Update the filtered list after editing a user
      console.log('Editar usuario:', news);
    }
  }

  deleteUser(news: New) {
    this.news = this.news.filter((u) => u.id !== news.id);
    this.search(); // Update the filtered list after deleting a user
    console.log('Eliminar usuario:', news);
  }
}
