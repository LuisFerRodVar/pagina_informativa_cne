import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ValidationErrors } from '@angular/forms';
import { NewsService } from '../../services/news.service';

interface New {
  id?: string;
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
  active: boolean;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  searchQuery = new FormControl('');
  news: New[] = [];
  filteredNews: New[] = [];
  isModalOpen = false;
  isDeleteModalOpen = false;
  isImageModalOpen = false;
  isEditing = false;
  currentNewsId: string | null = null;
  newsToDelete: New | null = null;
  currentImage: string | null = null;

  newTitle = new FormControl('', Validators.required);
  newDate = new FormControl('', [Validators.required, this.dateValidator]);
  newDescription = new FormControl('', Validators.required);
  newLink = new FormControl('');
  newImage = new FormControl('');

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
      this.filteredNews = news;
    });
  }

  search() {
    const query = this.searchQuery.value?.toLowerCase() || '';
    this.filteredNews = this.news.filter(
      news =>
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
      const updatedNews: Partial<New> = {
        title: this.newTitle.value || '',
        date: this.newDate.value || '',
        description: this.newDescription.value || '',
        link: this.newLink.value || '',
        image: this.newImage.value || ''
      };
      this.newsService.updateNews(this.currentNewsId, updatedNews).then(() => {
        console.log('Noticia editada:', updatedNews);
      });
    } else {
      const newNews: New = {
        title: this.newTitle.value || '',
        date: this.newDate.value || '',
        description: this.newDescription.value || '',
        link: this.newLink.value || '',
        image: this.newImage.value || '',
        active: true
      };
      this.newsService.addNews(newNews).then(() => {
        console.log('Noticia agregada:', newNews);
      });
    }
    this.closeModal();
  }

  editNews(news: New) {
    this.isEditing = true;
    this.currentNewsId = news.id!;
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
    if (this.newsToDelete && this.newsToDelete.id) {
      this.newsService.deleteNews(this.newsToDelete.id).then(() => {
        console.log('Noticia eliminada:', this.newsToDelete);
      });
      this.closeDeleteModal();
    }
  }

  openImageModal(image: string) {
    this.currentImage = image;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.currentImage = null;
    this.isImageModalOpen = false;
  }

  toggleActive(news: New) {
    if (news.id) {
      const updatedNews: Partial<New> = { active: !news.active };
      this.newsService.updateNews(news.id, updatedNews).then(() => {
        console.log(`Noticia ${news.active ? 'desactivada' : 'activada'}:`, news);
      });
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
