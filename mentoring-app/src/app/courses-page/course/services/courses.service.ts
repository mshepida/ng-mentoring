import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CourseClass } from '../models/course.models';

export interface RequestParams {
  textFragment: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private BASE_URL = 'http://localhost:3004/courses';

  constructor(private http: HttpClient) {
   }

  public getCourses({amount, textFragment}): Observable<CourseClass[]> {
    return this.http.get<CourseClass[]>(`${this.BASE_URL}`, {
      params: {
        start: '0',
        count: amount,
        textFragment
      }
    });
  }

  public createCourse(course: CourseClass): Observable<CourseClass> {
    return this.http.post<CourseClass>(`${this.BASE_URL}`, course);
  }

  public getCourse(id: number): Observable<CourseClass> {
    return this.http.get<CourseClass>(`${this.BASE_URL}/${id}`);
  }

  public updateCourse(course: CourseClass): Observable<CourseClass> {
    return this.http.patch<CourseClass>(`${this.BASE_URL}/${course.id}`, course);
  }

  public deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
