import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';


import { CourseItemComponent } from '../courses-page/course/course-item/course-item.component';
import { CourseComponent } from '../courses-page/course/course.component';
import { CoursesPageComponent } from './courses-page.component';
import { HighlightByDateDirective } from './highlightDirective/highlight-by-date.directive';
import { DurationPipe } from './pipes/durationPipe/duration.pipe';
import { SortByDatePipe } from './pipes/sortByDatePipe/sort-by-date.pipe';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { DurationComponent } from './course/add-course/duration/duration.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { CoursesRouterModule } from './courses-router.module';
import { CreationDateComponent } from './course/edit-course/creation-date/creation-date.component';


@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseItemComponent,
    CourseComponent,
    HighlightByDateDirective,
    DurationPipe,
    SortByDatePipe,
    AddCourseComponent,
    DurationComponent,
    EditCourseComponent,
    CreationDateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    CoursesRouterModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-AU'}
  ]
})
export class CoursesPageModule { }
