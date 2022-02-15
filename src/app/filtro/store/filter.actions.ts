import { createAction, props } from '@ngrx/store';



export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: string }>()
);
