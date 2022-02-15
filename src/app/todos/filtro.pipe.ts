import { Todo } from './models/todo.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: string): Todo[] {
    switch (filtro) {
      case 'completados': {
        return todos.filter(todo => todo.completed);
      }
      case 'pendientes': {
        return todos.filter(todo => !todo.completed);
      }
      default: {
        return todos;
      }
    }
  }

}
