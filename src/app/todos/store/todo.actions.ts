import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
  '[Todo] Create',
  props<{ text: string }>()
);
