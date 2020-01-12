import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './course.reducer';

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

export const isLoadingCoursesFailed = createSelector(getCoursesState,
    (state: CoursesState) => state.loadCoursesFailed);
