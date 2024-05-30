import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CceComponent } from './cce/cce.component';
import { HostelComponent } from './hostel/hostel.component';
import { DirectoryComponent } from './directory/directory.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  {path: 'dashboard', component: HomeComponent},
  {path: 'cce', component: CceComponent},
  {path: 'albergues', component: HostelComponent},
  {path: 'directorio', component: DirectoryComponent},
  {path: 'acerca', component: AboutComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'}
];
