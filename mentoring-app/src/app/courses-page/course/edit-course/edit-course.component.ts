import { Component, OnInit } from '@angular/core';
import { CourseClass } from '../models/course.models';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoursesState, getCurrentCourse } from '../../../store/reducers/course.reducer';
import { GetCourse, UpdateCourse } from '../../../store/actions/course.actions';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  currentCourse: CourseClass;
  currentCourseInfo: CourseClass;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<CoursesState>) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.store.dispatch(new GetCourse(parseInt(params.get('id'), 10)));
    });
    this.store.select(getCurrentCourse).subscribe(
      (currentCourse: CourseClass) => {
        this.currentCourse = currentCourse;
        this.currentCourseInfo = { ...this.currentCourse };
      }
    );

  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

  public onSave(): void {
    this.store.dispatch(new UpdateCourse(this.currentCourseInfo));
    this.router.navigate(['/courses']);
  }

}
