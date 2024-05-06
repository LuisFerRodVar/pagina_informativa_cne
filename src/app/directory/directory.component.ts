import { Component } from '@angular/core';
import { DirectoryDataComponent } from './directory-data/directory-data.component';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [DirectoryDataComponent],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css'
})
export class DirectoryComponent {

}
