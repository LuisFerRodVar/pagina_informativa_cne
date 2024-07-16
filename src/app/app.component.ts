import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';
import { DirectoryService } from './services/directory.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    MenuMobileComponent,
    FontAwesomeModule,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {

  }
  title = 'pagina_informativa_cne';
  faBars = faBars;
  faX = faX;
  open = false;
  toggleOpen() {
    this.open = !this.open;
  }
  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }
}
