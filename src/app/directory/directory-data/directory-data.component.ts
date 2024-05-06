import { Component } from '@angular/core';

@Component({
  selector: 'app-directory-data',
  standalone: true,
  imports: [],
  templateUrl: './directory-data.component.html',
  styleUrl: './directory-data.component.css'
})
export class DirectoryDataComponent {

  data = [{
    name:"Frainer Lara Blanco",
    job: "Coordinador",
    institution: "Municipalidad",
    mail: "f.lara@munidegolfito.go.cr"
  },
  {
    name:"Frainer Lara Blanco",
    job: "Coordinador",
    institution: "Municipalidad",
    mail: "f.lara@munidegolfito.go.cr"
  },
  {
    name:"Frainer Lara Blanco",
    job: "Coordinador",
    institution: "Municipalidad",
    mail: "f.lara@munidegolfito.go.cr"
  }]
}
