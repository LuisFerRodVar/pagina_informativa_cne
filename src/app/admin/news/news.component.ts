import { Component } from '@angular/core';
import { FormControl, Validators, ValidationErrors } from '@angular/forms';

interface New {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  searchQuery = new FormControl('');
  news: New[] = [
    { id: 1, title: 'Informacion general', date: '24/05/2024', description: 'Los sucesos se encuentran en desarrollo', link: 'https://example.com', image: 'https://via.placeholder.com/50' },
    { id: 2, title: 'Actualización importante', date: '24/05/2024', description: 'Más detalles sobre el evento', link: 'https://example.com', image: 'https://via.placeholder.com/50' },
    { id: 3, title: 'Aviso de seguridad', date: '24/05/2024', description: 'Medidas preventivas y recomendaciones', link: 'https://example.com', image: 'https://via.placeholder.com/50' },
  ];
  filteredNews: New[] = [...this.news];
  isModalOpen = false;
  isDeleteModalOpen = false;
  isEditing = false;
  currentNewsId: number | null = null;
  newsToDelete: New | null = null;

  newTitle = new FormControl('', Validators.required);
  newDate = new FormControl('', [Validators.required, this.dateValidator]);
  newDescription = new FormControl('', Validators.required);
  newLink = new FormControl('');
  newImage = new FormControl('');

  search() {
    const query = this.searchQuery.value?.toLowerCase() || '';
    this.filteredNews = this.news.filter(
      (news) =>
        news.title.toLowerCase().includes(query) ||
        news.description.toLowerCase().includes(query)
    );
  }

  addNews() {
    this.isEditing = false;
    this.currentNewsId = null;
    this.newTitle.setValue('');
    this.newDate.setValue('');
    this.newDescription.setValue('');
    this.newLink.setValue('');
    this.newImage.setValue('');
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveNews() {
    if (this.isEditing && this.currentNewsId !== null) {
      const newsItem = this.news.find(n => n.id === this.currentNewsId);
      if (newsItem) {
        newsItem.title = this.newTitle.value || '';
        newsItem.date = this.newDate.value || '';
        newsItem.description = this.newDescription.value || '';
        newsItem.link = this.newLink.value || '';
        newsItem.image = this.newImage.value || '';
        this.search();
        console.log('Noticia editada:', newsItem);
      }
    } else {
      const newNews: New = {
        id: this.news.length + 1,
        title: this.newTitle.value || '',
        date: this.newDate.value || '',
        description: this.newDescription.value || '',
        link: this.newLink.value || '',
        image: this.newImage.value || ''
      };
      this.news.push(newNews);
      this.search();
      console.log('Noticia agregada:', newNews);
    }
    this.closeModal();
  }

  editNews(news: New) {
    this.isEditing = true;
    this.currentNewsId = news.id;
    this.newTitle.setValue(news.title);
    this.newDate.setValue(news.date);
    this.newDescription.setValue(news.description);
    this.newLink.setValue(news.link);
    this.newImage.setValue(news.image);
    this.isModalOpen = true;
  }

  openDeleteModal(news: New) {
    this.newsToDelete = news;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.newsToDelete = null;
  }

  confirmDelete() {
    if (this.newsToDelete) {
      this.news = this.news.filter((n) => n.id !== this.newsToDelete!.id);
      this.search();
      console.log('Noticia eliminada:', this.newsToDelete);
      this.closeDeleteModal();
    }
  }

  dateValidator(control: FormControl): ValidationErrors | null {
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!control.value.match(datePattern)) {
      return { invalidDate: true };
    }
    return null;
  }
}
