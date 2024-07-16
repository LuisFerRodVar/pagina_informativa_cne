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
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [AngularFireAuthModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.registroForm.valid) {
      const email = this.registroForm.value['correo'];
      const password = this.registroForm.value['contrasena'];
      console.log({ email, password });

      try {
        const result = await this.auth.createUserWithEmailAndPassword(email, password);
        console.log('Usuario registrado exitosamente', result);
        this.router.navigate(['/admin/login']);
      } catch (error) {
        console.error('Error al registrar usuario', error);
      }
    }
  }
}
