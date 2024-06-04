import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hostels-registration',
  standalone: true,
  imports: [],
  templateUrl: './hostels-registration.component.html',
  styleUrl: './hostels-registration.component.css'
})
export class HostelsRegistrationComponent {
  hostelForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    canton: new FormControl('', Validators.required),
    distrito: new FormControl('', Validators.required),
    comunidad: new FormControl('', Validators.required),
    responsable: new FormControl('', Validators.required),
    capacidad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    contacto: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
  });

  @Output() hostelRegistered = new EventEmitter<any>();

  onSubmit() {
    if (this.hostelForm.valid) {
      const newHostel = {
        id: null, // El ID se asignará en el componente de la lista de hostels
        ...this.hostelForm.value
      };
      this.hostelRegistered.emit(newHostel);
      this.hostelForm.reset();
    }
  }

}
