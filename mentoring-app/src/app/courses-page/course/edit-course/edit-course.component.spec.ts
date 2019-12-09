import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseComponent } from './edit-course.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { of } from 'rxjs';

describe('EditCourseComponent', () => {
  let component: EditCourseComponent;
  let fixture: ComponentFixture<EditCourseComponent>;
  let coursesService: CoursesService;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourseComponent ],
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
        CoursesService,
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({id: 1})) }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    coursesService = TestBed.get(CoursesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to courses on cancel', () => {
    component.onCancel();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/courses']);
  });

  it('should add course and navigate to courses', () => {
    spyOn(coursesService, 'updateCourse');
    component.onSave();

    expect(coursesService.updateCourse).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/courses']);
  });
});
