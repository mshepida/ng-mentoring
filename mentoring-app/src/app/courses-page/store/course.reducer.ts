import { CourseClass } from '../course/models/course.models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as CoursesActions from './course.actions';


export interface CoursesState {
    coursesList: CourseClass[];
    currentCourse: CourseClass;
    loadCoursesFailed: boolean;
}

export const initialState: CoursesState = {
    coursesList: [],
    currentCourse: null,
    loadCoursesFailed: false
};

export function coursesReducer(
    state = initialState,
    action: CoursesActions.CoursesActions
): CoursesState {
    switch (action.type) {
        case CoursesActions.CoursesActionTypes.LoadMoreCoursesSucess:
        case CoursesActions.CoursesActionTypes.LoadCoursesSucess: {
            return {
                ...state,
                coursesList: action.payload,
                loadCoursesFailed: false
            };
        }
        case CoursesActions.CoursesActionTypes.LoadCoursesFailed: {
            return {
                ...state,
                loadCoursesFailed: true
            };
        }
        case CoursesActions.CoursesActionTypes.GetCourseSucess: {
            return {
                ...state,
                currentCourse: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
