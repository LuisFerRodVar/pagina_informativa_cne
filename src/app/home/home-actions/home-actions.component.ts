import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-actions',
  standalone: true,
  imports: [],
  templateUrl: './home-actions.component.html',
  styleUrl: './home-actions.component.css'
})
export class HomeActionsComponent implements OnInit {
  currentIndex: number = 0;
  itemsPerPage: number = 3;
  images: { id: string, src: string }[] = [
    { id: 'img1', src: '../../../assets/img/home/ComoNosPreparamos.webp' },
    { id: 'img2', src: '../../../assets/img/home/ComoActuar.webp' },
    { id: 'img3', src: '../../../assets/img/home/ComoActuarInundacion.webp' },
    { id: 'img4', src: '../../../assets/img/home/ComoNosPreparamos.webp' },
    { id: 'img5', src: '../../../assets/img/home/ComoActuar.webp' },
    { id: 'img6', src: '../../../assets/img/home/ComoActuarInundacion.webp' }
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
    return `translateX(-${this.currentIndex * 100 / this.itemsPerPage}%)`;
  }

  nextSlide(): void {
    if (this.currentIndex + this.itemsPerPage < this.images.length) {
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
      this.currentIndex = Math.max(0, this.images.length - this.itemsPerPage);
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