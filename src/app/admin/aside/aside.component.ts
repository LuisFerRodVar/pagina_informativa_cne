import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBook, faGear, faHome, faNewspaper, faSchool, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  faBars = faBars;
  faHome = faHome;
  faUser = faUser;
  faNews = faNewspaper;
  faBuilding = faBuilding;
  faSchool = faSchool;
  faBook = faBook;
  faGear = faGear;

}
