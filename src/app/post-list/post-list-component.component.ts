import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../Post';
import { Subscription } from 'rxjs';
import { PostItemServiceService } from 'src/app/services/post-item-service.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
  postSubscription: Subscription;
  posts: Post[] = [];

  constructor(private postItemServiceService:PostItemServiceService){}

  ngOnInit(){
    this.postSubscription = this.postItemServiceService.postSubject.subscribe(
      (posts: Post[])=>{
        this.posts = posts;
      }
    );
    this.postItemServiceService.emitPosts();
  }

  post: Post;

  onDownLove(post: Post){
    this.postItemServiceService.dontLovePost(post);
  }

  onPlusLove(post: Post){
    this.postItemServiceService.lovePost(post);
  }

  onDelete(post: Post){
    this.postItemServiceService.deletePost(post);
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
}