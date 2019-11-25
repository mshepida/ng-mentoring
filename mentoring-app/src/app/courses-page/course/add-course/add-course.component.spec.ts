import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../services/courses.service';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;
  let coursesService: CoursesService;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseComponent ],
      imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        CoursesService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    coursesService = TestBed.get(CoursesService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to courses on cancel', () => {
    component.onCancel();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/courses']);
  });

  it('should add course and navigate to courses', () => {
    spyOn(coursesService, 'createCourse');
    component.onAdd();

    expect(coursesService.createCourse).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/courses']);
  });
});
