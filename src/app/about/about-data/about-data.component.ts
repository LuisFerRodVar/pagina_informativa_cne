import { Component } from '@angular/core';

@Component({
  selector: 'app-about-data',
  standalone: true,
  imports: [],
  templateUrl: './about-data.component.html',
  styleUrl: './about-data.component.css'
})
export class AboutDataComponent {
  option = 1;
  toggleOption(newOption:number){
    this.option = newOption;
  }
}

