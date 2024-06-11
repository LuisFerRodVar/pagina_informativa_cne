
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      recordar: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario Enviado', this.loginForm.value);
      // Aquí puedes manejar el envío del formulario, como enviarlo a un servidor
    }
  }
}
