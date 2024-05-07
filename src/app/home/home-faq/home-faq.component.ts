import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faMinus,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

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
  activeQuestionId: string | null = null;

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
        this.activeQuestionId = id;
        const closeButton = element.querySelector('.close');
        if (closeButton) {
          closeButton.classList.add('active');
        }
      } else {
        this.activeQuestionId = null;
      }
    }
  }

  isQuestionActive(id: string): boolean {
    return this.activeQuestionId === id;
  }
}
