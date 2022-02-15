import { Todo } from './../models/todo.model';
import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggle, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  ),
  on(actions.edit, (state, { id, text }) =>
    state.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
  ),
  on(actions.deleteTodo, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),
  on(actions.toggleAll, (state, { completado }) =>
    state.map((todo) => ({ ...todo, completed: completado }))
  )
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
