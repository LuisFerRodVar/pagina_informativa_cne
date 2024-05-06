import { Component } from '@angular/core';
import { CceMapComponent } from './cce-map/cce-map.component';

@Component({
  selector: 'app-cce',
  standalone: true,
  imports: [CceMapComponent],
  templateUrl: './cce.component.html',
  styleUrl: './cce.component.css'
})
export class CceComponent {

}
