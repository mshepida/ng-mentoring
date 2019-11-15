import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CourseClass } from '../models/course.models';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course: CourseClass;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter();

  constructor(
    private router: Router,
    private courseService: CoursesService) { }

  ngOnInit() {
  }

  public onEdit(event: Event): void {
    event.stopPropagation();
    console.log('Edit clicked');
  }

  public onDelete(event: Event, courseId: number): void {
    event.stopPropagation();
    this.deleteCourse.emit(courseId);
  }

  public goToCourse(id: number): void {
    this.router.navigate((['/courses', id]));
  }
}
