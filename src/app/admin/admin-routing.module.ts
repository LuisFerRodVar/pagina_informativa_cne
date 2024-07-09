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
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'usuarios', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'noticias', component: NewsComponent, canActivate: [AuthGuard] },
  { path: 'albergues', component: HostelsComponent, canActivate: [AuthGuard] },
  { path: 'comites', component: CommitteesComponent, canActivate: [AuthGuard] },
  {
    path: 'directorio',
    component: DirectoriesComponent,
  },
  {
    path: 'configuraciones',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
