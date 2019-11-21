import { Component, OnInit, AfterViewChecked , AfterContentChecked} from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PhotoService } from 'src/app/services/photo.service';
import { Post } from 'src/app/model/post';
import { Photo } from 'src/app/model/photo';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(public posts:PostService, public photos:PhotoService) { }

  lastposts:Post[]
  lastphotos:Photo[]
  indexShowGalleryItem:number

  ngOnInit() {
    this.posts.getLastPosts().subscribe(x=>this.lastposts = x)
    this.photos.getLastPhotos()
      .subscribe(x=> {
        this.lastphotos = x
        this.indexShowGalleryItem = x.length -1
        console.log('photos here');
        
        //this.showNextGalleryItem()
        setTimeout(()=>{ this.showNextGalleryItem() })
        setInterval(()=>{ this.showNextGalleryItem() }, 1600)
      })
  }

  showNextGalleryItem(){
    let eLast = document.querySelector(
      `.my-index-${this.indexShowGalleryItem}`) as HTMLElement;
    //eLast.style.display = '';
    eLast.className = eLast.className.replace(' show', ' hide')

    if (this.indexShowGalleryItem == this.lastphotos.length-1) {
      this.indexShowGalleryItem = -1
    }
 
    let eNext = document.querySelector(
      `.my-index-${++this.indexShowGalleryItem}`) as HTMLElement;
    //eNext.style.display = 'block'
    //eNext.className += ' show' 
    eNext.className = eNext.className.replace(' hide', ' show')

  }

}
