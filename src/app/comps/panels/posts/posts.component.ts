import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'panel-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = []
  constructor(public svc:PostService, 
    private loc:LocationService) { }

  ngOnInit() {
    this.svc.getPostsBySelectedUser()
      .subscribe(data => this.posts = data)
  }

}
