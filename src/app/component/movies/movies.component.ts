import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  allMovies:any[]=[]
  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.getData("")
  }
  getData(category: string){
    this._MoviesService.getTrending("movie").subscribe(res=>{
      this.allMovies=res.results




    })
  }
}
