import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginPageComponent } from './login-page.component';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginPageComponent
  }
];

@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ LoginPageComponent ]
})
export class LoginModule { }
