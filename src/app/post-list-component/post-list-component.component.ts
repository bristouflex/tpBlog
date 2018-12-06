import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input()
  post: Post;

  onDownLove(){
    this.post.loveIts -= 1;
  }

  onPlusLove(){
    this.post.loveIts += 1;
  }

  constructor() { }

  ngOnInit() {
  }

}