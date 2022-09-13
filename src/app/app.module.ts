import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { RegisterComponent } from './component/register/register.component';
import { MoviesComponent } from './component/movies/movies.component';
import { TvComponent } from './component/tv/tv.component';
import { PeopleComponent } from './component/people/people.component';
import { LoginComponent } from './component/login/login.component';
import { MovieDetialsComponent } from './component/movie-detials/movie-detials.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavParComponent } from './component/nav-par/nav-par.component';

import{HttpClientModule} from'@angular/common/http';
import { HeaderComponent } from './component/header/header.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    LoginComponent,
    MovieDetialsComponent,
    NotFoundComponent,
    NavParComponent,
    HeaderComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
