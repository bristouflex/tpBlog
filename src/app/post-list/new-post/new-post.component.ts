import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/Post';
import { PostItemServiceService } from 'src/app/services/post-item-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postPost: FormGroup;
  constructor(private formBuilder: FormBuilder, private postItemServiceService: PostItemServiceService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postPost = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmitPost(){
    const title = this.postPost.get('title').value;
    const content = this.postPost.get('content').value;
    const newPost = new Post(title, content);
    this.postItemServiceService.createPost(newPost);
    this.router.navigate(['/posts']);
  }

}
