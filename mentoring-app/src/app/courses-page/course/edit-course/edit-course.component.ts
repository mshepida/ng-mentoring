import { Component, OnInit } from '@angular/core';
import { CourseClass } from '../models/course.models';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  courseInfo: CourseClass;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.courseInfo = this.coursesService.getCourse(parseInt(params.get('id'), 10));
    });
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

  public onSave(): void {
    this.coursesService.updateCourse(this.courseInfo);
    this.router.navigate(['/courses']);
  }

}
