import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseClass } from '../models/course.models';
import { Store } from '@ngrx/store';
import { CoursesState } from '../../../store/reducers/course.reducer';
import { AddCourse } from '../../../store/actions/course.actions';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  courseInfo: CourseClass = {
    id: 0,
    name: '',
    length: 0,
    description: '',
    authors: [],
    date: '',
    isTopRated: false
  };

  constructor(
    private router: Router,
    private store: Store<CoursesState>) { }

  ngOnInit() {
  }

  public onAdd(): void {
    this.store.dispatch(new AddCourse(this.courseInfo));
    this.router.navigate(['/courses']);
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

}
