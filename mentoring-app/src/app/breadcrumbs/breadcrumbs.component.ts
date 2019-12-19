import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

import { CoursesService } from '../courses-page/course/services/courses.service';
import { CourseClass } from '../courses-page/course/models/course.models';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  currentCourseId: number;
  currentCourseName: string;

  constructor(
    private router: Router,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (this.router.url.split('/courses/').length > 1) {
        this.currentCourseId = parseInt(this.router.url.split('/courses/')[1], 10);
        this.getCurrentCourseName(this.currentCourseId);
      } else {
        this.currentCourseName = null;
      }
    });
  }

  getCurrentCourseName(id: number): void {
    this.coursesService.getCourse(this.currentCourseId).subscribe((course: CourseClass) => {
      this.currentCourseName = course.name;
    });
  }
}
