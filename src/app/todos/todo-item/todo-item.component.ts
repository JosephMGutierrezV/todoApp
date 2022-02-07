import { FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';

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

  constructor() {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.inputText.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
  }
}
