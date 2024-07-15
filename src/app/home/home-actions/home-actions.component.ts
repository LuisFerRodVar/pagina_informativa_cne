import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-actions',
  standalone: true,
  imports: [],
  templateUrl: './home-actions.component.html',
  styleUrls: ['./home-actions.component.css']
})
export class HomeActionsComponent implements OnInit {
  currentIndex: number = 0;
  itemsPerPage: number = 3;
  images: { id: string, src: string }[] = [
    { id: 'img1', src: 'http://www.cne.go.cr/preparativos_respuestas/multimedios/afiches/2-Inundaciones.png?h=869' },
    { id: 'img2', src: 'http://www.cne.go.cr/preparativos_respuestas/multimedios/afiches/6-Recopilados-inudaciones.png?h=869' },
    { id: 'img3', src: 'http://www.cne.go.cr/preparativos_respuestas/multimedios/afiches/5-Recopilados-deslizamientos.png?h=869' },
    { id: 'img4', src: 'http://www.cne.go.cr/preparativos_respuestas/multimedios/afiches/3-Maletin-emergencia.png?h=869' },
    { id: 'img5', src: 'http://www.cne.go.cr/preparativos_respuestas/multimedios/afiches/4-Plan-familiar.png?h=869' },
  ];
  isModalOpen: boolean = false;
  currentImageSrc: string | null = null;

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

  openImageModal(src: string): void {
    this.currentImageSrc = src;
    this.isModalOpen = true;
  }

  closeImageModal(): void {
    this.isModalOpen = false;
    this.currentImageSrc = null;
  }
}
