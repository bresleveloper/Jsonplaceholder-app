import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private api = 'https://jsonplaceholder.typicode.com/posts/'
  private usersapi = 'https://jsonplaceholder.typicode.com/users/#/posts'

  selectedPost:Post

  constructor(private http:HttpClient,
    private usrsSvc:UserService) { }

  getPostsBySelectedUser():Observable<Post[]>{
    return this.http
      .get<Post[]>(this.usersapi
          .replace('#',this.usrsSvc.selectedUser.id.toString()))
  }

  get(id:number):Observable<Post>{
    return this.http.get<Post>(this.api+id)
  }

}
