import { Action } from '@ngrx/store';
import { CourseClass } from '../../courses-page/course/models/course.models';

export enum CoursesActionTypes {
    LoadCourses = '[Courses Page] Load Courses',
    LoadCoursesSucess = '[Courses Page] Load Courses Sucess',
    LoadMoreCourses = '[Courses Page] Load More Courses',
    LoadMoreCoursesSucess = '[Courses Page] Load More Courses Sucess',
    DeleteCourse = '[Courses Page] Delete Course',
    GetCourse = '[Edit Page] Get Course',
    GetCourseSucess = '[Edit Page] Get Course Sucess',
    UpdateCourse = '[Edit Page] Update Course',
    AddCourse = '[Add Page] Add Course'
  }

export class LoadCourses implements Action {
  readonly type = CoursesActionTypes.LoadCourses;
}

export class LoadCoursesSucess implements Action {
    readonly type = CoursesActionTypes.LoadCoursesSucess;

    constructor(public payload: CourseClass[]) {}
}

export class LoadMoreCourses implements Action {
    readonly type = CoursesActionTypes.LoadMoreCourses;

    constructor(public payload: string) {}
}

export class LoadMoreCoursesSucess implements Action {
    readonly type = CoursesActionTypes.LoadMoreCoursesSucess;

    constructor(public payload: CourseClass[]) {}
}

export class DeleteCourse implements Action {
    readonly type = CoursesActionTypes.DeleteCourse;

    constructor(public payload: number) {}
}

export class GetCourse implements Action {
    readonly type = CoursesActionTypes.GetCourse;

    constructor(public payload: number) {}
}

export class GetCourseSucess implements Action {
    readonly type = CoursesActionTypes.GetCourseSucess;

    constructor(public payload: CourseClass) {}
}

export class UpdateCourse implements Action {
    readonly type = CoursesActionTypes.UpdateCourse;

    constructor(public payload: CourseClass) {}
}

export class AddCourse implements Action {
    readonly type = CoursesActionTypes.AddCourse;

    constructor(public payload: CourseClass) {}
}

export type CoursesActions = LoadCourses
| LoadCoursesSucess
| LoadMoreCourses
| LoadMoreCoursesSucess
| GetCourse
| GetCourseSucess
| UpdateCourse
| AddCourse;
