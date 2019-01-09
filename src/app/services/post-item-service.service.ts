import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from 'src/app/Post';

@Injectable({
  providedIn: 'root'
})
export class PostItemServiceService {

  constructor() { }
  
  posts: Post[] = [
    {
      title: "Mon premier post", 
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      loveIts: 10, 
      created_at: new Date()
    },
    {
      title: "Mon second post", 
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      loveIts: -100, 
      created_at: new Date()
    },
    {
      title: "Mon troisième post", 
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      loveIts: 0, 
      created_at: new Date()
    },
  ];

  postSubject = new Subject<Post[]>();

  emitPosts(){
    this.postSubject.next(this.posts);
  }

  lovePost(post: Post){
    this.posts.forEach(
      (postEl)=>{
        if(post === postEl) post.loveIts += 1;
      }
    );
    this.emitPosts();
  }

  dontLovePost(post: Post){
    this.posts.forEach(
      (postEl)=>{
        if(post === postEl) post.loveIts -= 1;
      }
    );
    this.emitPosts();
  }

  deletePost(post: Post){
    const postDelete = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) return true;
      }
    );
    this.posts.splice(postDelete, 1);
    this.emitPosts();
  }

  createPost(post: Post){
    this.posts.push(post);
    console.log(post.title);
    this.emitPosts();
  }

}
