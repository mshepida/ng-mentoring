import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { CourseClass } from './models/course.models';
import { CoursesService } from './services/courses.service';
import { Router } from '@angular/router';
import { Observable, Subject, fromEvent, Subscription } from 'rxjs';
import { takeUntil, filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, AfterViewInit, OnDestroy {
  public courses: Observable<CourseClass[]>;
  public showSpinner = false;
  public searchInput: string;
  private destroySourse$ = new Subject();
  private coursesAmount = '5';
  private keyUpListener: Observable<{}>;

  @ViewChild('searchField', {static: false}) searchField: ElementRef;

  constructor(
    private router: Router,
    private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses({amount: this.coursesAmount, textFragment: ''});
  }

  ngAfterViewInit(): void {
    this.keyUpListener = fromEvent(this.searchField.nativeElement, 'keyup').pipe(
      takeUntil(this.destroySourse$),
      filter(() => Boolean(this.searchInput) && this.searchInput.length >= 3),
      distinctUntilChanged(),
      debounceTime(300)
    );
  }

  public handleDelete(id: number): void {
    if (confirm('You really want to delete this course?')) {
      this.coursesService.deleteCourse(id)
      .subscribe(() => this.courses = this.coursesService.getCourses({amount: this.coursesAmount, textFragment: ''}));
    }
  }

  public onLoadMore(): void {
    this.coursesAmount = String(parseInt(this.coursesAmount, 10) + parseInt(this.coursesAmount, 10));
    this.courses = this.coursesService.getCourses({amount: this.coursesAmount, textFragment: ''});
  }

  public onAddCourse(): void {
    this.router.navigate((['/courses/new']));
  }

  public fetchCourses(): void {
    this.courses = this.coursesService.getCourses({amount: 5, textFragment: this.searchInput});
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
