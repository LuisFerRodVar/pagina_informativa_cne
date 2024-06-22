import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CceComponent } from './cce/cce.component';
import { HostelComponent } from './hostel/hostel.component';
import { DirectoryComponent } from './directory/directory.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'cce', component: CceComponent },
  { path: 'albergues', component: HostelComponent },
  { path: 'directorio', component: DirectoryComponent },
  { path: 'acerca', component: AboutComponent },
  { path: 'admin', component: AdminComponent ,loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
