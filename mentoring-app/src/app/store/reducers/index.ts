import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { coursesReducer, CoursesState } from './course.reducer';
import { authReducer, AuthState } from './auth.reducer';

export interface State {
  courses: CoursesState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  courses: coursesReducer,
  auth: authReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
