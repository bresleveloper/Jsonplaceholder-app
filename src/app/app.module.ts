import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//parse error.... ngmodel is not a known attribute of ...

import { AppComponent } from './app.component';
import { TodoComponent } from './comps/items/todo/todo.component';
import { TodosComponent } from './pages/todos/todos.component';
import { PostComponent } from './comps/items/post/post.component';
import { UserComponent } from './comps/items/user/user.component';
import { CommentComponent } from './comps/items/comment/comment.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumComponent } from './comps/items/album/album.component';
import { PhotoComponent } from './comps/items/photo/photo.component';
import { NaviComponent } from './comps/navi/navi.component';
import { FilterComponent } from './comps/filter/filter.component';

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
    LoginComponent,
    HomepageComponent,
    AlbumsComponent,
    AlbumComponent,
    PhotoComponent,
    NaviComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
