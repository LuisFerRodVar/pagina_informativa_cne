import { Component } from '@angular/core';
import { FooterNavbarComponent } from './footer-navbar/footer-navbar.component';
import { FooterLogoComponent } from './footer-logo/footer-logo.component';
import { FooterSocialComponent } from './footer-social/footer-social.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterNavbarComponent, FooterLogoComponent, FooterSocialComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
