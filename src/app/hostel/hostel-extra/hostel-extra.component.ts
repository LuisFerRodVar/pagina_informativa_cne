import { Component } from '@angular/core';

@Component({
  selector: 'app-hostel-extra',
  standalone: true,
  imports: [],
  templateUrl: './hostel-extra.component.html',
  styleUrl: './hostel-extra.component.css'
})
export class HostelExtraComponent {
  hostels = [
    {
      district: 'Golfito',
      community: 'Golfito Centro',
      type: 'Escuela',
      capacity: 0,
      inCharge: 'Sergio Pérez Aymerich',
      contact: 'no disponible'
    },
    {
      district: 'Golfito',
      community: 'La Mona',
      type: 'Escuela',
      capacity: 0,
      inCharge: 'Heber Cerdas Fuentes',
      contact: 'no disponible'
    },
    {
      district: 'Guaycara',
      community: 'Río Claro',
      type: 'Salón comunal',
      capacity: 0,
      inCharge: 'Cecilia Femell Chavarría',
      contact: 'no disponible'
    },
    {
      district: 'Guaycara',
      community: 'Río Claro',
      type: 'Escuela',
      capacity: 0,
      inCharge: 'Nancy Campos Porras',
      contact: 'no disponible'
    },
    {
      district: 'Guaycara',
      community: 'Coto 56 y 57',
      type: 'Escuela',
      capacity: 0,
      inCharge: 'Marisol Esquivel Chichilla',
      contact: 'no disponible'
    },
    {
      district: 'Guaycara',
      community: 'San Ramón',
      type: 'Escuela',
      capacity: 0,
      inCharge: 'Sidey Padilla Pérez',
      contact: 'no disponible'
    },
    {
      district: 'Guaycara',
      community: 'La Julieta',
      type: 'Salón comunal',
      capacity: 0,
      inCharge: 'José Rosales Carballo',
      contact: 'no disponible'
    },
    {
      district: 'Guaycara',
      community: 'Rio Claro',
      type: 'Aulas INA',
      capacity: 0,
      inCharge: 'Carlos Murillo Vargas',
      contact: 'no disponible'
    },
    {
      district: 'Guaycara',
      community: 'Rio Claro',
      type: 'Iglesia',
      capacity: 0,
      inCharge: 'Toribio Jiménez Baltodano',
      contact: 'no disponible'
    },
    {
      district: 'Guaycara',
      community: 'San Ramón',
      type: 'Salón comunal',
      capacity: 0,
      inCharge: 'Carmen Velencia Molina',
      contact: 'no disponible'
    },
    {
      district: 'Pavón',
      community: 'Comte',
      type: 'Escuela',
      capacity: 0,
      inCharge: 'Luis Baltodano Jiménez',
      contact: 'no disponible'
    },
    {
      district: 'Pavón',
      community: 'Zancudo',
      type: 'Escuela',
      capacity: 0,
      inCharge: 'Jessica Días Baltodano',
      contact: 'no disponible'
    },
    {
      district: 'Pavón',
      community: 'Comte',
      type: 'Gimnasio Liceo',
      capacity: 0,
      inCharge: 'Alfonso Rojas Loría',
      contact: 'no disponible'
    },

  ]
}
