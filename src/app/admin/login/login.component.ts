import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularFireAuthModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      //console.log('Formulario Enviado', this.loginForm.value);
      const password = this.loginForm.value['contrasena'];
      const email = this.loginForm.value['correo'];
      console.log({ email, password });

      try {
        const result = await this.auth.signInWithEmailAndPassword(email, password);
        const token = await result.user?.getIdToken();
        //console.log({ result, token });

        // Redirigir a /dashboard después de la autenticación exitosa
        this.router.navigate(['/admin/dashboard']);
      } catch (error) {
        //console.error('Error de autenticación', error);
      }
    }
  }
}

