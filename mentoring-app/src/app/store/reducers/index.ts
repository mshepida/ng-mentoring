import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { coursesReducer, CoursesState } from './course.reducer';

export interface State {
  courses: CoursesState;
}

export const reducers: ActionReducerMap<State> = {
  courses: coursesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
