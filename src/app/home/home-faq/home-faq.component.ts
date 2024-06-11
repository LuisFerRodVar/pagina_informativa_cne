import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faMinus,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-home-faq',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home-faq.component.html',
  styleUrls: ['./home-faq.component.css'],
})
export class HomeFaqComponent {
  faPlus = faPlus;
  faMinus = faMinus;

  openFaqId: number | null = null;

  toggleFaq(id: number) {
    this.openFaqId = this.openFaqId === id ? null : id;
  }

  faqs: FAQ[] = [
    {
      id: 1,
      question: '¿Qué es la CNE y cuál es su misión?',
      answer:
        'La Comisión Nacional de Prevención de Riesgos y Atención de Emergencias (CNE) es una entidad dedicada a la gestión de riesgos y la atención de emergencias en Costa Rica. Su misión es proteger a la población y minimizar los impactos de los desastres naturales y antropogénicos.',
    },
    {
      id: 2,
      question: '¿Qué áreas abarca la CME de Golfito?',
      answer:
        'La CME de Golfito abarca el cantón de Golfito y sus alrededores, incluyendo las comunidades y localidades cercanas.',
    },
    {
      id: 3,
      question: '¿Qué debo hacer durante una inundación?',
      answer:
        'Evite áreas bajas y diríjase a terrenos más altos. No cruce ríos o calles inundadas. Siga las instrucciones de las autoridades locales y manténgase informado a través de los medios oficiales.',
    },
    {
      id: 4,
      question: '¿Dónde se encuentran los albergues en caso de emergencia?',
      answer:
        'Los albergues están ubicados en varias localidades y se activarán en caso de una emergencia. Consulte el mapa en nuestra página para encontrar el más cercano a su ubicación.',
    },
    {
      id: 5,
      question: '¿Cómo puedo contactar a la CNE de Golfito?',
      answer:
        'Puede contactar a la CNE de Golfito a través del teléfono [Número de Teléfono] o por correo electrónico a [Correo Electrónico].',
    },
  ];
}
