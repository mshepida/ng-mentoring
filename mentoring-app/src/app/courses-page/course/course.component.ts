import { Component, OnInit } from '@angular/core';

import { CourseClass } from './models/course.models';
import { CoursesService } from './services/courses.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public courses: Observable<CourseClass[]>;
  public searchInput: string;
  private coursesAmount = '5';

  constructor(
    private router: Router,
    private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses(this.coursesAmount);
  }

  public handleDelete(id: number): void {
    if (confirm('You really want to delete this course?')) {
      this.coursesService.deleteCourse(id).subscribe(() => this.courses = this.coursesService.getCourses('5'));
    }
  }

  public onLoadMore(): void {
    this.coursesAmount = String(parseInt(this.coursesAmount) + 5);
    this.courses = this.coursesService.getCourses(this.coursesAmount);
  }

  public onAddCourse(): void {
    this.router.navigate((['/courses/new']));
  }

  public onFindClick(): void {
  this.courses = this.coursesService.getCoursesWithParams({textFragment: this.searchInput});
  }
}
