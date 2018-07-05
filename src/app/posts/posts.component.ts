import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor() { }

  ngOnInit() {
    // this.postService.getAllPosts().subscribe(posts=> {
    //   this.posts = posts;
    //   console.log(this.posts);
    // 
    // })
  }

}
