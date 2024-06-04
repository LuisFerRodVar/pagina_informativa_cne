import { Component, OnInit } from '@angular/core';

interface DashboardItem {
  id: number;
  nombre: string;
  correo: string;
  contacto: string;
  telefono: string;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  usersCount: number = 100;
  hostelsCount: number = 100;
  committeesCount: number = 100;

  dashboardItems: DashboardItem[] = [
    { id: 1, nombre: 'Nombre 1', correo: 'correo1@example.com', contacto: 'Contacto 1', telefono: '123456789' },
    { id: 2, nombre: 'Nombre 2', correo: 'correo2@example.com', contacto: 'Contacto 2', telefono: '987654321' },
    // Agrega más elementos según sea necesario
  ];

  constructor() {}

  ngOnInit(): void {}
}
