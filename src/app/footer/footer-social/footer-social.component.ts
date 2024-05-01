import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-social',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer-social.component.html',
  styleUrl: './footer-social.component.css'
})
export class FooterSocialComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faWhatsapp = faWhatsapp;
}
