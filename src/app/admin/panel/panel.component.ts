import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faEarthAmericas, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  faMagnifying = faMagnifyingGlass;
  faBell = faBell;
  faEarth = faEarthAmericas;

}
