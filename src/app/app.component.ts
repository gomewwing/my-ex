import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { map, throttleTime } from 'rxjs/operators';



@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  posts: any = [];
  links = [1,2,3];
  constructor(private http: Http){}
  // constructor(){}
  // constructor(private postsService: PostsService){}


  getAllPosts(){
        
    // return this.http.get('/test').pipe(map((posts)=>{

    // return this.http.get('/test').pipe(map((posts)=>{
    //   return posts;
    // }));
  }

  ngOnInit(){

    // this.getAllPosts().subscribe(posts=> {
    //   this.posts = posts.json();
    //   console.log(this.posts);
    // },
    // error => {
    //   console.log(error);
      
    // })
    
  }
  showInfo(){

  }
  onClick() {

  }

}
