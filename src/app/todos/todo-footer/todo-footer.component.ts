import { Component, OnInit } from '@angular/core';
import * as actionsFilter from '../../../app/filtro/store/filter.actions';
import * as actionsTodos from '../../../app/todos/store/todo.actions';
import { AppState } from '../../../app/app.reducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public pendientes: number = 0;

  public filtroActual: string = 'todos';

  public filtros: string[] = ['todos', 'completados', 'pendientes'];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completed).length;
    })
  }

  setFilter(filtro: string) {
    this.filtroActual = filtro;
    this.store.dispatch(actionsFilter.setFilter({ filter: this.filtroActual }));
  }

  deleteCompleted() {
    this.store.dispatch(actionsTodos.deleteAllCompleted());
  }

}
