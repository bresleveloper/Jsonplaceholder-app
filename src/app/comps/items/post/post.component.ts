import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'item-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:Post
  constructor() { }

  ngOnInit() {
  }

}
