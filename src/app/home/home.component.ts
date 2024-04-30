import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeAboutmeComponent } from './home-aboutme/home-aboutme.component';
import { HomeActionsComponent } from './home-actions/home-actions.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { HomeNewComponent } from './home-new/home-new.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, HomeAboutmeComponent, HomeActionsComponent, HomeActionsComponent, HomeInfoComponent, HomeNewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
