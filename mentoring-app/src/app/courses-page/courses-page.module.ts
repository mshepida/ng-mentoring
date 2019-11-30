import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CourseDetailsComponent } from '../courses-page/course/course-details/course-details.component';
import { CourseItemComponent } from '../courses-page/course/course-item/course-item.component';
import { CourseComponent } from '../courses-page/course/course.component';
import { CoursesPageComponent } from './courses-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HighlightByDateDirective } from './highlightDirective/highlight-by-date.directive';
import { DurationPipe } from './pipes/durationPipe/duration.pipe';
import { SearchPipe } from './pipes/searchPipe/search.pipe';
import { SortByDatePipe } from './pipes/sortByDatePipe/sort-by-date.pipe';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DurationComponent } from './course/add-course/duration/duration.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { AuthGuardGuard } from '../guards/auth-guard.guard';

const courseRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'courses/new',
    component: AddCourseComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'courses/:id',
    component: EditCourseComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  declarations: [
    CourseDetailsComponent,
    CoursesPageComponent,
    CourseItemComponent,
    CourseComponent,
    HighlightByDateDirective,
    DurationPipe,
    SearchPipe,
    SortByDatePipe,
    AddCourseComponent,
    DurationComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(courseRoutes),
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CoursesPageModule { }
