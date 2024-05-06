import { Component } from '@angular/core';
import { AboutGeographyComponent } from './about-geography/about-geography.component';
import { AboutDataComponent } from './about-data/about-data.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutGeographyComponent, AboutDataComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
