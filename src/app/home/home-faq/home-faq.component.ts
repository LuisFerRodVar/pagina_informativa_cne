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
      question: '¿Qué es este sitio web?',
      answer:
        'Este sitio web es una plataforma para compartir conocimientos y obtener respuestas a preguntas comunes.',
    },
    {
      id: 2,
      question: '¿Cómo puedo crear una cuenta?',
      answer:
        "Para crear una cuenta, haz clic en el botón 'Registrarse' en la parte superior derecha y completa el formulario de registro.",
    },
    {
      id: 3,
      question: '¿Es gratis usar el sitio web?',
      answer:
        'Sí, el uso básico del sitio web es gratuito. Sin embargo, ofrecemos funciones premium que requieren una suscripción.',
    },
    {
      id: 4,
      question: '¿Cómo puedo restablecer mi contraseña?',
      answer:
        "Para restablecer tu contraseña, haz clic en '¿Olvidaste tu contraseña?' en la página de inicio de sesión y sigue las instrucciones.",
    },
  ];
}

