import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.css'
})
export class MenuMobileComponent {

}
