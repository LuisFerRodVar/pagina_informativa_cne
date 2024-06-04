import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { HostelsComponent } from './hostels/hostels.component';
import { CommitteesComponent } from './committees/committees.component';
import { DirectoriesComponent } from './directories/directories.component';
import { SettingsComponent } from './settings/settings.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'usuarios', component: UsersComponent},
  {path: 'noticias', component: NewsComponent},
  {path: 'albergues', component: HostelsComponent},
  {path: 'comites', component: CommitteesComponent},
  {path: 'directorio', component: DirectoriesComponent},
  {path: 'configuraciones', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
