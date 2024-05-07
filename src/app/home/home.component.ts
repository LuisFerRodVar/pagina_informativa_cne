import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeAboutmeComponent } from './home-aboutme/home-aboutme.component';
import { HomeActionsComponent } from './home-actions/home-actions.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { HomeFaqComponent } from './home-faq/home-faq.component';
import { HomeScheduleComponent } from './home-schedule/home-schedule.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, HomeAboutmeComponent, HomeActionsComponent, HomeActionsComponent, HomeInfoComponent, HomeNewComponent, HomeFaqComponent, HomeScheduleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
