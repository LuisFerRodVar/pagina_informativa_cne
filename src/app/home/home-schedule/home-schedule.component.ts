import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus, IconDefinition  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-schedule',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home-schedule.component.html',
  styleUrl: './home-schedule.component.css'
})
export class HomeScheduleComponent {
  faPlus = faPlus;
  faMinus = faMinus;

  faIcon10: IconDefinition = faPlus;
  faIcon11: IconDefinition = faPlus;

  toggleItem(id: string) {
    const element = document.getElementById(id);
    
    if (element) {
      const isOpen = element.classList.contains('open');
      const schedule = document.querySelectorAll('.schedule');

      schedule.forEach((schedule: Element) => {
        schedule.classList.remove('open');
        const closeButton = schedule.querySelector('.close');
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
        if (id === 'Sch1') {
          this.faIcon10 = this.faMinus;
          this.faIcon11 = this.faPlus;
        } else if (id === 'Sch2') {
          this.faIcon10 = this.faPlus;
          this.faIcon11 = this.faMinus;
        }
      } else {
        if (id === 'Sch1') {
          this.faIcon10 = this.faPlus;
        } else if (id === 'Sch2') {
          this.faIcon11 = this.faPlus;
        }
      }
    }
  }
}
