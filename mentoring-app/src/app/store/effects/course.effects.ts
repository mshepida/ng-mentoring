import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { CoursesService } from '../../courses-page/course/services/courses.service';
import * as fromCoursesAction from '../actions/course.actions';
import { mergeMap, map, catchError, tap, switchMap } from 'rxjs/operators';
import { CourseClass } from '../../courses-page/course/models/course.models';
import { EMPTY } from 'rxjs';

@Injectable()
export class CoursesEffects {

    private coursesAmount = '5';

    @Effect()
    loadCourses$ = this.actions$
        .pipe(
            ofType(fromCoursesAction.CoursesActionTypes.LoadCourses),
            mergeMap(() => this.coursesService.getCourses({ amount: this.coursesAmount, textFragment: '' })
                .pipe(
                    map((courses: CourseClass[]) => new fromCoursesAction.LoadCoursesSucess(courses)),
                    catchError(() => EMPTY)
                ))
        );

    @Effect()
    loadMoreCourses$ = this.actions$
        .pipe(
            ofType(fromCoursesAction.CoursesActionTypes.LoadMoreCourses),
            switchMap((action: fromCoursesAction.LoadMoreCourses) => this.coursesService
                .getCourses({ amount: action.payload, textFragment: '' })
                .pipe(
                    map((courses: CourseClass[]) => new fromCoursesAction.LoadMoreCoursesSucess(courses)),
                    catchError(() => EMPTY)
                ))
        );

    @Effect({ dispatch: false })
    deleteCourse$ = this.actions$.
        pipe(
            ofType(fromCoursesAction.CoursesActionTypes.DeleteCourse),
            switchMap((action: fromCoursesAction.DeleteCourse) => this.coursesService.deleteCourse(action.payload)),
            catchError(() => EMPTY)
        );

    @Effect()
    getCurrentCourse$ = this.actions$
        .pipe(
            ofType(fromCoursesAction.CoursesActionTypes.GetCourse),
            switchMap((action: fromCoursesAction.GetCourse) => this.coursesService.getCourse(action.payload)
                .pipe(
                    map((currentCourse: CourseClass) => new fromCoursesAction.GetCourseSucess(currentCourse)),
                    catchError(() => EMPTY)
                ))
        );

    @Effect({ dispatch: false })
    updateCourse$ = this.actions$
        .pipe(
            ofType(fromCoursesAction.CoursesActionTypes.UpdateCourse),
            switchMap((action: fromCoursesAction.UpdateCourse) => this.coursesService.updateCourse(action.payload)),
            catchError(() => EMPTY)
        );

    @Effect({ dispatch: false })
    addCourse$ = this.actions$
        .pipe(
            ofType(fromCoursesAction.CoursesActionTypes.AddCourse),
            switchMap((action: fromCoursesAction.AddCourse) => this.coursesService.createCourse(action.payload)),
            catchError(() => EMPTY)
        );


    constructor(private actions$: Actions, private coursesService: CoursesService) { }
}
