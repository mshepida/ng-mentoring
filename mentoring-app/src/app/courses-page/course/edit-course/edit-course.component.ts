import { Component, OnInit } from '@angular/core';
import { CourseClass } from '../models/course.models';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoursesState } from '../../store/course.reducer';
import { GetCourse, UpdateCourse } from '../../store/course.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getCurrentCourse } from '../../store/course.selectors';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  currentCourse: CourseClass;
  currentCourseInfo: CourseClass;
  courseForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<CoursesState>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.store.dispatch(new GetCourse(parseInt(params.get('id'), 10)));
    });
    this.store.select(getCurrentCourse).subscribe(
      (currentCourse: CourseClass) => {
        this.currentCourse = currentCourse;
        this.currentCourseInfo = { ...this.currentCourse };
        this.courseForm = this.fb.group({
          title: [this.currentCourseInfo.name, [Validators.required, Validators.maxLength(50)]],
          description: [this.currentCourseInfo.description, [Validators.required, Validators.maxLength(500)]],
          creationDate: [this.currentCourseInfo.date, Validators.required],
          duration: [this.currentCourseInfo.length, Validators.required]
        });
      }
    );

  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

  public onSave(): void {
    const updatedCourseInfo = {
      ...this.currentCourseInfo,
      name: this.courseForm.get('title').value,
      description: this.courseForm.get('description').value,
      date: this.courseForm.get('creationDate').value,
      length: this.courseForm.get('duration').value
    };
    this.store.dispatch(new UpdateCourse(updatedCourseInfo));
    this.router.navigate(['/courses']);
  }

}
