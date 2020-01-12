import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { CoursesState } from '../../store/course.reducer';
import { AddCourse } from '../../store/course.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  courseForm: FormGroup;

  constructor(
    private router: Router,
    private store: Store<CoursesState>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      creationDate: [new Date(), Validators.required],
      duration: ['', Validators.required]
    });
  }

  public onAdd(): void {
    const newCourseInfo = {
      id: 0,
      isTopRated: false,
      authors: [],
      name: this.courseForm.get('title').value,
      description: this.courseForm.get('description').value,
      date: this.courseForm.get('creationDate').value,
      length: this.courseForm.get('duration').value
    };
    this.store.dispatch(new AddCourse(newCourseInfo));
    this.router.navigate(['/courses']);
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

}
