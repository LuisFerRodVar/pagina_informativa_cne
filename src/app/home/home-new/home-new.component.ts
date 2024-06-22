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
    link: string;
  }[] = [
    {
      id: '1',
      title:
        'CNE capacitó 170 personas con discapacidad para activarse ante emergencias',
      image: 'https://www.cne.go.cr/noticias/PG009151_archivos/image002.jpg',
      description:
        'La CNE continúa capacitando a personas con discapacidad en gestión del riesgo en la Zona Sur para prepararlas ante emergencias.',
      date: '2024-04-30',
      link: 'https://www.cne.go.cr/noticias/CNE%20capacito%20170%20personas%20con%20discapacidad%20para%20activarse%20ante%20emergencias.aspx'
    },
    {
      id: '2',
      title: 'CNE crea sitio web para dar seguimiento a 502 obras de infraestructura',
      image: 'https://www.cne.go.cr/noticias/PG009139_archivos/image002.gif',
      description: 'Quisque sagittis ipsum eu aliquam aliquet...',
      date: '2024-04-24',
      link: 'https://www.cne.go.cr/noticias/CNE%20crea%20sitio%20web%20para%20dar%20seguimiento%20a%20502%20obras%20de%20infraestructura.aspx'
    },
    {
      id: '3',
      title: 'Costa Rica es la sede de un gran evento de preparación ante desastres',
      image: 'https://www.cne.go.cr/noticias/PG009211_archivos/image002.jpg',
      description:
        'Nam sapien leo, luctus ut libero at, volutpat suscipit magna...',
      date: '2024-06-3',
      link: 'https://www.cne.go.cr/noticias/Costa%20Rica%20es%20la%20sede%20de%20un%20gran%20evento%20de%20preparacion%20ante%20desastres.aspx'
    },
    {
      id: '4',
      title: 'Equipos de búsqueda y rescate cuentan con nuevas herramientas',
      image: 'https://www.cne.go.cr/noticias/PG009175_archivos/image002.jpg',
      description:
        'Nam sapien leo, luctus ut libero at, volutpat suscipit magna...',
      date: '2024-05-14',
      link: ''
    }
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
