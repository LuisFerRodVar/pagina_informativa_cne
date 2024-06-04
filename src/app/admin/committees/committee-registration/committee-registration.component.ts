import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-committee-registration',
  standalone: true,
  imports: [],
  templateUrl: './committee-registration.component.html',
  styleUrl: './committee-registration.component.css'
})
export class CommitteeRegistrationComponent {

  committeeForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    canton: new FormControl('', Validators.required),
    distrito: new FormControl('', Validators.required),
    comunidad: new FormControl('', Validators.required),
    responsable: new FormControl('', Validators.required),
    contacto: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
  });

  @Output() committeeRegistered = new EventEmitter<any>();

  onSubmit() {
    if (this.committeeForm.valid) {
      const newCommittee = {
        id: null, // El ID se asignará en el componente de la lista de comités
        ...this.committeeForm.value
      };
      this.committeeRegistered.emit(newCommittee);
      this.committeeForm.reset();
    }
  }
}
