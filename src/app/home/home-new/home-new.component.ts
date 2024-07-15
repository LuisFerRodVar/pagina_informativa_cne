import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NewsService } from '../../services/news.service';  // Asegúrate de que la ruta es correcta
import { Observable } from 'rxjs';

interface News {
  id?: string;
  title: string;
  image: string;
  description: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-home-new',
  standalone: true,
  imports: [],
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css'],
})
export class HomeNewComponent implements OnInit {
  currentIndex: number = 0;
  itemsPerPage: number = 3;
  newsItems: News[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: any, private newsService: NewsService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateItemsPerPage();
      this.loadNews();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateItemsPerPage();
    }
  }

  updateItemsPerPage(): void {
    const width = window.innerWidth;
    if (width >= 1024) {
      this.itemsPerPage = 3;
    } else if (width >= 768) {
      this.itemsPerPage = 2;
    } else {
      this.itemsPerPage = 1;
    }
    this.updateTransform();
  }

  getTransform(): string {
    return `translateX(-${(this.currentIndex * 100) / this.itemsPerPage}%)`;
  }

  nextSlide(): void {
    if (this.currentIndex + this.itemsPerPage < this.newsItems.length) {
      this.currentIndex += this.itemsPerPage;
    } else {
      this.currentIndex = 0;
    }
    this.updateTransform();
  }

  prevSlide(): void {
    if (this.currentIndex - this.itemsPerPage >= 0) {
      this.currentIndex -= this.itemsPerPage;
    } else {
      this.currentIndex = Math.max(
        0,
        this.newsItems.length - this.itemsPerPage
      );
    }
    this.updateTransform();
  }

  updateTransform(): void {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    if (carousel) {
      carousel.style.transform = this.getTransform();
    }
  }

  loadNews(): void {
    this.newsService.getNews().subscribe(news => {
      this.newsItems = news;
    });
  }
}

