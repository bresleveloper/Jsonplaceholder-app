import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './comps/items/todo/todo.component';
import { TodosComponent } from './comps/panels/todos/todos.component';
import { PostComponent } from './comps/items/post/post.component';
import { UserComponent } from './comps/items/user/user.component';
import { CommentComponent } from './comps/items/comment/comment.component';
import { UsersComponent } from './comps/panels/users/users.component';
import { PostsComponent } from './comps/panels/posts/posts.component';
import { CommentsComponent } from './comps/panels/comments/comments.component';
import { UserOptionsComponent } from './comps/user-options/user-options.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    PostComponent,
    UserComponent,
    CommentComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    UserOptionsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
