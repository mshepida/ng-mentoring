import { Component, OnInit, OnChanges, AfterContentInit, OnDestroy } from '@angular/core';
import { CourseClass } from './models/course.models';
import { SearchPipe } from '../pipes/searchPipe/search.pipe';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [ SearchPipe ]
})
export class CourseComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  public courses: CourseClass[];
  public coursesCopy: CourseClass[];
  public searchInput: string;

  constructor(private searchPipe: SearchPipe) {}

  ngOnInit() {
    console.log('On Init');
    this.courses = [
      new CourseClass(1, 'Angular Course', 81, 'Webpack, Angular, Typescript', new Date(2019, 8, 25)),
      new CourseClass(2, 'RxJs course', 32, 'Observables, RxJs', new Date(2019, 10, 2), true),
      new CourseClass(3, 'Patterns Course', 133, 'Design Patterns', new Date(2019, 9, 8)),
      new CourseClass(4, 'Ngrx course', 58, 'State Management, ngrx/store', new Date(2019, 11, 15))
    ];

    this.coursesCopy = this.courses;
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

  public onFindClick(): void {
  this.coursesCopy = this.searchPipe.transform(this.courses, this.searchInput);
  console.log(this.searchInput);
  }
}
