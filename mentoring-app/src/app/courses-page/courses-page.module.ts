import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from '../courses-page/course/course-details/course-details.component';
import { CourseItemComponent } from '../courses-page/course/course-item/course-item.component';
import { CourseComponent } from '../courses-page/course/course.component';
import { CoursesPageComponent } from './courses-page.component';
import { SectionComponent } from '../section/section.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HighlightByDateDirective } from './highlightDirective/highlight-by-date.directive';
import { DurationPipe } from './pipes/durationPipe/duration.pipe';
import { SearchPipe } from './pipes/searchPipe/search.pipe';
import { SortByDatePipe } from './pipes/sortByDatePipe/sort-by-date.pipe'

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
    SectionComponent,
    HighlightByDateDirective,
    DurationPipe,
    SearchPipe,
    SortByDatePipe
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
