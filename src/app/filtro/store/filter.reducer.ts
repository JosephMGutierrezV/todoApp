import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';

export const initialState = 'todos'

const _filterReducer = createReducer(
  initialState,
  on(actions.setFilter, (state, { filter }) => filter)
);

export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action);
}
