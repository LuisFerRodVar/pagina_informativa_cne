import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';



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
  styleUrl: './home-faq.component.css'
})
export class HomeFaqComponent {
  faPlus = faPlus
  faMinus = faMinus
}
