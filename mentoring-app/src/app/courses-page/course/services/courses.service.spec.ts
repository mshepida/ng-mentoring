import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;
  const courses = of([
    {
      id: 8693,
      name: 'duis mollit reprehenderit ad',
      description: 'Est minim ea aute sunt laborum minim eu excepteur.d.',
      isTopRated: false,
      date: '2017-09-28T04:39:24+00:00',
      authors: [
        {
          id: 1370,
          name: 'Polly',
          lastName: 'Sosa'
        }
      ],
      length: 157
    },
    {
      id: 4980,
      name: 'magna excepteur aute deserunt',
      description: 'Sunt cu tempor.',
      isTopRated: false,
      date: '2016-05-31T02:02:36+00:00',
      authors: [
        {
          id: 8413,
          name: 'Greta',
          lastName: 'Richardson'
        },
        {
          id: 7458,
          name: 'Deana',
          lastName: 'Bruce'
        },
        {
          id: 5508,
          name: 'Patsy',
          lastName: 'Bright'
        }
      ],
      length: 207
    }
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService, HttpClient, HttpHandler]
    });
    service = TestBed.get(CoursesService);
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return course list', () => {
    const spy = spyOn(service, 'getCourses').and.returnValue(courses);
    expect(service.getCourses('2')).toEqual(courses);
  });

  it('should return specific course', () => {
    const spy = spyOn(service, 'getCourse').and.returnValue(courses[0]);
    expect(service.getCourse(1)).toEqual(courses[0]);
  });

  it('should add new course', () => {
    const newCourse = {
      id: 1,
      name: 'test',
      description: 'lpa aliquip laborum cillum. t ea voluptate ea nostrud.',
      isTopRated: false,
      date: '2017-09-28T04:39:24+00:00',
      authors: [
        {
          id: 10,
          name: 'Test',
          lastName: 'Sosa'
        }
      ],
      length: 157
    };

    service.createCourse(newCourse).subscribe(course => {
      expect(course).toEqual(newCourse);
    });
  });
});
