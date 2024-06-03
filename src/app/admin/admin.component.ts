import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AsideComponent,PanelComponent ,RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private router: Router) { }
  isLogin(): Boolean{
    const url = this.router.url;
    return url.includes('login') || url.includes('signup');
  }
}
