import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-directory-registration',
  standalone: true,
  imports: [],
  templateUrl: './directory-registration.component.html',
  styleUrl: './directory-registration.component.css'
})
export class DirectoryRegistrationComponent {
  directoryForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    institucion: new FormControl('', Validators.required),
    mesa: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
  });

  @Output() directoryRegistered = new EventEmitter<any>();

  onSubmit() {
    if (this.directoryForm.valid) {
      const newDirectory = {
        id: null, // El ID se asignará en el componente de la lista de directorios
        ...this.directoryForm.value
      };
      this.directoryRegistered.emit(newDirectory);
      this.directoryForm.reset();
    }
  }

  closeModal() {
    this.directoryRegistered.emit(null); // Emitir null para cerrar el modal sin registrar
  }
}
