import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { CourseClass } from '../models/course.models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course: CourseClass;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter();

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  public onEdit(event: Event, id: number): void {
    event.stopPropagation();
  }

  public onDelete(event: Event, courseId: number): void {
    event.stopPropagation();
    this.deleteCourse.emit(courseId);
  }

  public goToCourse(id: number): void {
    this.router.navigate((['/courses', id]));
  }
}
