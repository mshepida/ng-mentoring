import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { CourseClass } from './models/course.models';
import { CoursesService } from './services/courses.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CoursesState, getCourses } from '../../store/reducers/course.reducer';
import { LoadCourses, LoadMoreCourses, DeleteCourse } from '../../store/actions/course.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, AfterViewInit, OnDestroy {
  public courses: Observable<CourseClass[]>;
  public showSpinner = false;
  public searchInput: FormControl;
  private destroySourse$ = new Subject();
  private coursesAmount = '5';
  private keyUpListener: Observable<{}>;

  @ViewChild('searchField', {static: false}) searchField: ElementRef;

  constructor(
    private router: Router,
    private coursesService: CoursesService,
    private store: Store<CoursesState>) {}

  ngOnInit() {
    this.searchInput = new FormControl('');
    this.store.dispatch(
      new LoadCourses()
    );
    this.courses = this.store.select(getCourses);
  }

  ngAfterViewInit(): void {
    this.keyUpListener = this.searchInput.valueChanges.pipe(
      takeUntil(this.destroySourse$),
      filter(() => this.searchInput.value.length >= 3),
      distinctUntilChanged(),
      debounceTime(300)
    );
  }

  public handleDelete(id: number): void {
    if (confirm('You really want to delete this course?')) {
      this.store.dispatch(new DeleteCourse(id));
      this.store.dispatch(new LoadMoreCourses(this.coursesAmount));
    }
  }

  public onLoadMore(): void {
    this.coursesAmount = String(parseInt(this.coursesAmount, 10) + parseInt(this.coursesAmount, 10));
    this.store.dispatch(new LoadMoreCourses(this.coursesAmount));
  }

  public onAddCourse(): void {
    this.router.navigate((['/courses/new']));
  }

  public fetchCourses(): void {
    this.courses = this.coursesService.getCourses({amount: 5, textFragment: this.searchInput.value});
  }

 public onType(): void {
  this.keyUpListener.subscribe(() => {
    this.fetchCourses();
    this.showSpinner = false;
  },
  err => console.log('HTTP Error', err));
 }

 ngOnDestroy() {
   this.destroySourse$.next(1);
   this.destroySourse$.complete();
 }
 }
