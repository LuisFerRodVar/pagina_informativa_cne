import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-new',
  standalone: true,
  imports: [],
  templateUrl: './home-new.component.html',
  styleUrl: './home-new.component.css',
})
export class HomeNewComponent implements OnInit {
  currentIndex: number = 0;
  itemsPerPage: number = 3;
  newsItems: {
    id: string;
    title: string;
    image: string;
    description: string;
    date: string;
  }[] = [
    {
      id: '1',
      title: 'Noticia 1',
      image: '../../../assets/img/home/notice.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: '2024-05-30',
    },
    {
      id: '2',
      title: 'Noticia 2',
      image: '../../../assets/img/home/notice.webp',
      description: 'Quisque sagittis ipsum eu aliquam aliquet...',
      date: '2024-05-29',
    },
    {
      id: '3',
      title: 'Noticia 3',
      image: '../../../assets/img/home/notice.webp',
      description:
        'Nam sapien leo, luctus ut libero at, volutpat suscipit magna...',
      date: '2024-05-28',
    },
    {
      id: '4',
      title: 'Noticia 4',
      image: '../../../assets/img/home/notice.webp',
      description:
        'Nam sapien leo, luctus ut libero at, volutpat suscipit magna...',
      date: '2024-05-28',
    },
    {
      id: '5',
      title: 'Noticia 5',
      image: '../../../assets/img/home/notice.webp',
      description:
        'Nam sapien leo, luctus ut libero at, volutpat suscipit magna...',
      date: '2024-05-28',
    },
    {
      id: '6',
      title: 'Noticia 6',
      image: '../../../assets/img/home/notice.webp',
      description:
        'Nam sapien leo, luctus ut libero at, volutpat suscipit magna...',
      date: '2024-05-28',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateItemsPerPage();
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
}
