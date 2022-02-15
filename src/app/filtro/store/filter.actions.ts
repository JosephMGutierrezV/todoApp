import { createAction, props } from '@ngrx/store';

export enum FilterActionTypes {
  todos = 'todos',
  completados = 'completados',
  pendientes = 'pendientes',
}

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: FilterActionTypes }>()
);
