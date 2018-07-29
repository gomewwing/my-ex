import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './navbar/search/search.component';
import { WeatherComponent } from './navbar/weather/weather.component';
import { NavbarComponent } from './navbar/navbar.component';

import { PostsService } from './posts.service';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatListModule, MatIconModule, MatCheckboxModule, MatTabsModule, MatDividerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './navbar/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'home',
        component: HomeComponent
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
    MatDividerModule,
    BrowserAnimationsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
