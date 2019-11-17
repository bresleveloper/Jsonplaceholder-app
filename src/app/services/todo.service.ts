import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private api = 'https://jsonplaceholder.typicode.com/todos/'
  //private userapi = 'https://jsonplaceholder.typicode.com/users/#/todos'

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.api)
  }

  get(id:number):Observable<Todo>{
    return this.http.get<Todo>(this.api + id)
  }



}
