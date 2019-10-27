import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from '../course/course-details/course-details.component';
import { CoursesPageComponent } from './courses-page.component';
import { CourseItemComponent } from '../course/course-item/course-item.component';
import { CourseComponent } from '../course/course.component';
import { SectionComponent } from '../section/section.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const courseRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
  },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent
  }
];

@NgModule({
  declarations: [
    CourseDetailsComponent,
    CoursesPageComponent,
    CourseItemComponent,
    CourseComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(courseRoutes),
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class CoursesPageModule { }
