import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './posts/search/search.component';
import { WeatherComponent } from './posts/weather/weather.component';
import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts.service';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatListModule, MatIconModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SearchComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component: PostsComponent
      },
      {
        path:'search',
        component: SearchComponent
      },
      {
        path:'weather',
        component: WeatherComponent
      },
    ]),
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
