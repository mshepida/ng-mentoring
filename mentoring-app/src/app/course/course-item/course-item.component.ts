import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../models/models';

const HOUR_MINUTES = 60;

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public getCourseDuration(duration: number): string {
    if (duration >= HOUR_MINUTES) {
      return `${Math.floor(duration / HOUR_MINUTES)}hr ${duration % HOUR_MINUTES}min`;
    } else {
      return `${duration}min`;
    }
  }

  public onEdit(): void {
    console.log('Edit clicked');
  }

  public onDelete(courseId: number): void {
    this.deleteCourse.emit(courseId);
  }

}
