import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ParamMap } from '@angular/router';
import { CoursesService } from '../courses-page/course/services/courses.service';
import { CourseClass } from '../courses-page/course/models/course.models';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit{
  currentCourseId: number;
  currentCourseName: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.router.url.split('/courses/').length > 1) {
        this.currentCourseId = parseInt(this.router.url.split('/courses/')[1]);
        this.getCurrentCourseName(this.currentCourseId);
      }
      else {
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
