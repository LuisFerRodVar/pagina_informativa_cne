import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-actions',
  standalone: true,
  imports: [],
  templateUrl: './home-actions.component.html',
  styleUrl: './home-actions.component.css'
})
export class HomeActionsComponent implements OnInit {
  currentIndex: number = 0;
  images: { id: string, src: string }[] = [
    { id: 'img1', src: '../../../assets/img/home/ComoNosPreparamos.webp' },
    { id: 'img2', src: '../../../assets/img/home/ComoActuar.webp' },
    { id: 'img3', src: '../../../assets/img/home/ComoActuarInundacion.webp' },
    { id: 'img4', src: '../../../assets/img/home/ComoNosPreparamos.webp' },
    { id: 'img5', src: '../../../assets/img/home/ComoActuar.webp' },
    { id: 'img6', src: '../../../assets/img/home/ComoActuarInundacion.webp' }
  ];

  ngOnInit(): void {}

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100 / 3}%)`;
  }

  nextSlide(): void {
    if (this.currentIndex + 3 < this.images.length) {
      this.currentIndex += 3;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide(): void {
    if (this.currentIndex - 3 >= 0) {
      this.currentIndex -= 3;
    } else {
      this.currentIndex = this.images.length - (this.images.length % 3 || 3);
    }
  }
}