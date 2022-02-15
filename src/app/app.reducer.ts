import { ActionReducerMap } from '@ngrx/store';
import { filterReducer } from './filtro/store/filter.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/store/todo.reducer';

export interface AppState {
  todos: Todo[],
  filtro: string
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filterReducer
}
