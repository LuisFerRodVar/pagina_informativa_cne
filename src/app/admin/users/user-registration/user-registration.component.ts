import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  onSubmit() {
    // Aquí se puede agregar la lógica para enviar el formulario
    console.log('Formulario enviado');
  }
}
