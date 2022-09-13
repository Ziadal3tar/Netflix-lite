import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.css']
})
export class MovieDetialsComponent  {
  movieId:string=""
  movieDetails :any = {}
  constructor(private _activatedRoute:ActivatedRoute, private _movies:MoviesService) {
    this.movieId = _activatedRoute.snapshot.params.id;
    this.getDetails()
  }


  getDetails(){
    this._movies.getMovieDetails(this.movieId).subscribe(res =>{
      this.movieDetails = res
    })

  }

}
