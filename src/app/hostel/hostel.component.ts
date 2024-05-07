import { Component } from '@angular/core';
import { HostelMapComponent } from './hostel-map/hostel-map.component';
import { HostelExtraComponent } from './hostel-extra/hostel-extra.component';

@Component({
  selector: 'app-hostel',
  standalone: true,
  imports: [HostelMapComponent, HostelExtraComponent],
  templateUrl: './hostel.component.html',
  styleUrl: './hostel.component.css'
})
export class HostelComponent {

}
