import { CourseClass } from '../../courses-page/course/models/course.models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as CoursesActions from '../actions/course.actions';


export interface CoursesState {
    coursesList: CourseClass[];
    currentCourse: CourseClass;
}

export const initialState: CoursesState = {
    coursesList: [],
    currentCourse: null
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
                coursesList: action.payload
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

export const getCoursesState = createFeatureSelector<CoursesState>('courses');
export const getCurrentCourse = createSelector(
    getCoursesState,
    (state: CoursesState) => state.currentCourse
);
export const getCoursesEntities = createSelector(
    getCoursesState,
    (state: CoursesState) => state.coursesList
);
export const getCourses = createSelector(getCoursesEntities, entities => {
    return Object.keys(entities).map(id => entities[id]);
});
