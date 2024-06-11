import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    UsersComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
})
export class AdminModule { }
