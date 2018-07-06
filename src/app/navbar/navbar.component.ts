import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    {name:"HOME", link:"home"},
    {name:"실시간 검색어", link:"search"},
    {name:"오늘의 날씨", link:"weather"},
  ];
  constructor() { }

  ngOnInit() {
    // this.postService.getAllPosts().subscribe(posts=> {
    //   this.posts = posts;
    //   console.log(this.posts);
    // 
    // })
  }

}
