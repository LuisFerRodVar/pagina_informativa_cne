import { Component } from '@angular/core';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {
  onSubmit() {
    // Aquí se puede agregar la lógica para enviar el formulario
    console.log('Formulario enviado');
  }
}
