import { Component, OnInit } from '@angular/core';
import { CourseClass } from '../models/course.models';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  courseInfo: CourseClass = {
    id: 0,
    title: '',
    duration: 0,
    description: '',
    creationDate: new Date()
  };

  constructor(
    private router: Router,
    private coursesService: CoursesService) { }

  ngOnInit() {
  }

  public onAdd(): void {
    this.coursesService.createCourse(this.courseInfo);
    this.router.navigate(['/courses']);
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

}
