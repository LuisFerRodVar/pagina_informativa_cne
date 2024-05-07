import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus, IconDefinition  } from '@fortawesome/free-solid-svg-icons';

interface FAQ {
  question: string;
  answer: string;
  active: boolean;
}

@Component({
  selector: 'app-home-faq',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home-faq.component.html',
  styleUrl: './home-faq.component.css',
})
export class HomeFaqComponent {
  faPlus = faPlus;
  faMinus = faMinus;

  faIcon1: IconDefinition = faPlus;
  faIcon2: IconDefinition = faPlus;
  faIcon3: IconDefinition = faPlus;
  faIcon4: IconDefinition = faPlus;

  toggleItem(id: string) {
    const element = document.getElementById(id);
    
    if (element) {
      const isOpen = element.classList.contains('open');
      const questions = document.querySelectorAll('.question');

      questions.forEach((question: Element) => {
        question.classList.remove('open');
        const closeButton = question.querySelector('.close');
        if (closeButton) {
          closeButton.classList.remove('active');
        }
      });

      if (!isOpen) {
        element.classList.add('open');
        const closeButton = element.querySelector('.close');
        if (closeButton) {
          closeButton.classList.add('active');
        }
        if (id === 'faq1') {
          this.faIcon1 = this.faMinus;
          this.faIcon2 = this.faPlus;
          this.faIcon3 = this.faPlus;
          this.faIcon4 = this.faPlus;
        } else if (id === 'faq2') {
          this.faIcon1 = this.faPlus;
          this.faIcon2 = this.faMinus;
          this.faIcon3 = this.faPlus;
          this.faIcon4 = this.faPlus;
        } else if (id === 'faq3') {
          this.faIcon1 = this.faPlus;
          this.faIcon2 = this.faPlus;
          this.faIcon3 = this.faMinus;
          this.faIcon4 = this.faPlus;
        } else if (id === 'faq4') {
          this.faIcon1 = this.faPlus;
          this.faIcon2 = this.faPlus;
          this.faIcon3 = this.faPlus;
          this.faIcon4 = this.faMinus;
        }
      } else {
        if (id === 'faq1') {
          this.faIcon1 = this.faPlus;
        } else if (id === 'faq2') {
          this.faIcon2 = this.faPlus;
        } else if (id === 'faq3') {
          this.faIcon3 = this.faPlus;
        } else if (id === 'faq4') {
          this.faIcon4 = this.faPlus;
        }
      }
    }
  }
}
