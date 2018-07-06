import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  posts: any = [];

  constructor(private http: Http ) { }

    getAllPosts(){
          
        return this.http.get('/test').pipe(map((posts)=>{
          return posts;
        }))
    }

    ngOnInit(){
      console.log(this.posts);
      
      this.getAllPosts().subscribe(posts=> {
        this.posts = posts.json();
        console.log(this.posts);
      },
      error => {
        console.log(error);
        
      })
      
    }
  
}
