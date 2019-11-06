import { Component, OnInit, OnChanges, AfterContentInit, OnDestroy } from '@angular/core';
import { CourseClass } from './models/course.models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  public courses: CourseClass[];

  constructor() {}

  ngOnInit() {
    console.log('On Init');
    this.courses = [
      new CourseClass(1, 'Video Course 1', 81, 'Webpack, Angular, Typescript', new Date(2019, 8, 25)),
      new CourseClass(2, 'Video Course 2', 32, 'Observables, RxJs', new Date(2019, 10, 2), true),
      new CourseClass(3, 'Video Course 3', 133, 'Design Patterns', new Date(2019, 9, 8)),
      new CourseClass(4, 'Video Course 4', 58, 'State Management, ngrx/store', new Date(2019, 11, 15))
    ];
  }

  ngOnChanges() {
    console.log('onChanges');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngOnDestroy() {
    console.log('Destroy');
  }

  public handleDelete(id: number): void {
    console.log('Course id', id);
  }

  public onLoadMore(): void {
    console.log('load more');
  }
}
