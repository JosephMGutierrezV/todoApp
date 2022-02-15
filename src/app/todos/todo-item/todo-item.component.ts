import { AppState } from './../../app.reducer';
import { FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import * as actions from './../store/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @ViewChild('inputText') inputText!: ElementRef;

  @Input() todo!: Todo;

  public checkCompleted!: FormControl;

  public txtInput!: FormControl;

  public editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;

    this.txtInput.setValue(this.todo.text);

    setTimeout(() => {
      this.inputText.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.text) {
      return;
    }

    this.store.dispatch(
      actions.edit({
        id: this.todo.id,
        text: this.txtInput.value,
      })
    );
  }
  delete() {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }
}
