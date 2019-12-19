import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses-page.component';
import { AuthGuard } from '../guards/auth-guard.guard';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const courseRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/new',
    component: AddCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id',
    component: EditCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(courseRoutes)
  ],
  exports: [RouterModule]
})
export class CoursesRouterModule { }
