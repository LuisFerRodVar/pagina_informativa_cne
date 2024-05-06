import { Component } from '@angular/core';
import { HostelMapComponent } from './hostel-map/hostel-map.component';

@Component({
  selector: 'app-hostel',
  standalone: true,
  imports: [HostelMapComponent],
  templateUrl: './hostel.component.html',
  styleUrl: './hostel.component.css'
})
export class HostelComponent {

}
