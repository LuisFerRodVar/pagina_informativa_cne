import { Component } from '@angular/core';

@Component({
  selector: 'app-hostel-extra',
  standalone: true,
  imports: [],
  templateUrl: './hostel-extra.component.html',
  styleUrl: './hostel-extra.component.css'
})
export class HostelExtraComponent {
  hostels = [{
    district: 'Guaycara',
    community: 'Río Claro',
    type: 'Escuela',
    capacity: 40,
    inCharge: 'Paco',
    contact: '8888-8888'
  },
  {
    district: 'Guaycara',
    community: 'Río Claro',
    type: 'Escuela',
    capacity: 40,
    inCharge: 'Paco',
    contact: '8888-8888'
  },
  {
    district: 'Guaycara',
    community: 'Río Claro',
    type: 'Escuela',
    capacity: 40,
    inCharge: 'Paco',
    contact: '8888-8888'
  }]
}
