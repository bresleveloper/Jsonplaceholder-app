import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'panel-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  index: number = 0;
  currentTodo:Todo
  spanClassValue:string = 'stat'
  divClassValue:string = ''

  constructor(public todoSvc:TodoService) {}

  ngOnInit() {
    this.next()
  }

  next(){
    this.spanClassValue = 'stat w8'
    this.divClassValue = 'shhh'

    this.todoSvc.get(++this.index)
      .subscribe(todoItem => {
        this.spanClassValue = 'stat'
        this.divClassValue = ''
        this.currentTodo = todoItem
      })
  }

}
