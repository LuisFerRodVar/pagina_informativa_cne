import { Component } from '@angular/core';
import { DirectoryService } from '../../services/directory.service';
import { DirectoryDto, TableDto } from '../../models/directory';

@Component({
  selector: 'app-directory-data',
  standalone: true,
  imports: [],
  templateUrl: './directory-data.component.html',
  styleUrl: './directory-data.component.css',
})
export class DirectoryDataComponent {
  tables:TableDto[];
  Comite = [
    {
      name: 'Elvia Cedeño Chavarría',
      job: 'Coordinación',
      institution: 'Municipalidad',
      mail: 'elviace@gmail.com',
    },
    {
      name: 'Randal Esteban Blanco Navarro',
      job: 'Secretaría',
      institution: 'UCR',
      mail: 'randal.blanco@ucr.ac.cr',
    },
    {
      name: 'Axel Alfaro Sequeira',
      job: 'Gestión de Información',
      institution: 'Municipalidad',
      mail: 'axel.alfaro@munidegolfito.go.cr',
    },
    {
      name: 'Jose David Solera Sánchez',
      job: 'Gestión  Administrativa',
      institution: 'Municipalidad',
      mail: 'solera1414sanchez@gmail.com',
    },
    {
      name: 'Randy Barrantes Sánchez',
      job: 'Gestión Logística',
      institution: 'Municipalidad',
      mail: 'barrantesrandy680@gmail.com',
    },
  ];

  MesaPrimeraRespuesta = [
    {
      name: 'Nestor Iván Sequeira Aguirre',
      job: 'Coordinación',
      institution: 'Cruz Roja',
      mail: 'nestor.sequeira@cruzroja.or.cr',
    },
    {
      name: 'Frainer Lara Blanco',
      job: 'Gestión de Información',
      institution: 'Cruz Roja',
      mail: 'golfito@cruzroja.or.cr',
    },
  ];

  MesaSaludAguaSanamiento = [
    {
      name: 'Dr. Fernando Mata Castro ',
      job: 'Coordinación',
      institution: 'Ministerio de Salud',
      mail: 'fernando.mata@misalud.go.cr',
    },
    {
      name: 'Dr. Pablo Gómez Esquivel ',
      job: 'Gestión de Información',
      institution: 'CCSS-Hospital',
      mail: 'pgomeze@ccss.sa.cr',
    },
  ];

  MesaInfraServicios = [
    {
      name: 'Daem Delgado Arauz ',
      job: 'Coordinación',
      institution: 'MOPT',
      mail: 'daem.delgado@mopt.go.cr',
    },
    {
      name: 'Keneth Merino Obando',
      job: 'Gestión de Información',
      institution: 'ICE',
      mail: 'KMerino@ice.go.cr',
    },
  ];

  MesaSocialProHumanitaria = [
    {
      name: 'Vilma Hernández Segura',
      job: 'Coordinación',
      institution: 'INA',
      mail: 'VHernadezSegura@ina.ac.cr',
    },
    {
      name: 'Aurea Castro Umaña',
      job: 'Gestión de Información',
      institution: 'INAMU',
      mail: 'acastrou@inamu.go.cr',
    },
  ];
  constructor(private _directoryService: DirectoryService) {}
  ngOnInit(): void {
    this._directoryService.getAll().subscribe((res) => {
 
      
      
       this.tables = [...new Set(res.map((item) => item.table))].map(item=>({
        name:item,
        items:[]
      }));
      
      this.tables.forEach(item=>{
        item.items=res.filter(element=>item.name===element.table);
      });
      
    });
  }
}
