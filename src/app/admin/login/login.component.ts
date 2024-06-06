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
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularFireAuthModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
  
    if (this.registroForm.valid) {
  
      console.log('Formulario Enviado', this.registroForm.value);
      // Aquí puedes manejar el envío del formulario, como enviarlo a un servidor
      const password = this.registroForm.value['contrasena'];
      const email = this.registroForm.value['correo'];
      console.log({email,password});
      const result = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      const token=await result.user?.getIdToken()
      console.log({result,token});
    }
  }
}
