import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { NewsComponent } from './news/news.component';
import { HostelsComponent } from './hostels/hostels.component';
import { DirectoriesComponent } from './directories/directories.component';
import { CommitteesComponent } from './committees/committees.component';
import { BinnacleComponent } from './binnacle/binnacle.component';
import { BinnaclesComponent } from './binnacles/binnacles.component';

@NgModule({
  declarations: [
    UsersComponent,
    NewsComponent,
    HostelsComponent,
    DirectoriesComponent,
    CommitteesComponent,
    BinnacleComponent,
    BinnaclesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class AdminModule { }
