import { Component } from '@angular/core';

@Component({
  selector: 'app-news-registration',
  standalone: true,
  imports: [],
  templateUrl: './news-registration.component.html',
  styleUrl: './news-registration.component.css'
})
export class NewsRegistrationComponent {
  image: File | null = null;

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0];
    }
  }

  onSubmit() {
    // Aquí se puede agregar la lógica para enviar el formulario
    console.log('Formulario enviado');
  }
}
