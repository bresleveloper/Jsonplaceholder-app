import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostComment } from 'src/app/model/comment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private api = 'https://jsonplaceholder.typicode.com/comments/'
  selectedComment:PostComment
  constructor(private http:HttpClient) {}

  getComments():Observable<PostComment[]>{
    return this.http.get<PostComment[]>(this.api)
  }

  getCommentForPosts(postIds:number[]):Observable<PostComment[]>{
    let u = this.api + '?'
    for (let i = 0; i < postIds.length; i++) {
      u += `postId=${postIds[i]}&`// "id=" + i + "&"
      console.log('getCommentForPost for fat', u);
    }
    console.log('getCommentForPost', u);
    return this.http.get<PostComment[]>(u)
  }
}
