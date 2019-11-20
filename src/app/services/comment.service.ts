import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private api = 'https://jsonplaceholder.typicode.com/comments/'
  selectedComment:Comment
  constructor(private http:HttpClient) {}

  getComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.api)
  }

  getComment(id:number):Observable<Comment>{
    return this.http.get<Comment>(this.api + id)
  }
}
