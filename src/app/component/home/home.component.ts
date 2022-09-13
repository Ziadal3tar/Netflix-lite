import { Component, OnInit } from '@angular/core';

import { MoviesService } from 'src/app/movies.service';
 declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allMovies:any[]=[]
allTv:any[]=[]
allPeople:any[]=[]


  constructor(private _MoviesService: MoviesService) {

  }



  ngOnInit(): void {
  this.getData("")
  this.getTv("")
  this.getPeople("")



  $("#title").hide(3000)
  }
getData(category: string){
  this._MoviesService.getTrending("movie").subscribe(res=>{
    this.allMovies=res.results.splice(0,10)




  })

}

getTv(category: string){
  this._MoviesService.getTrending("tv").subscribe(res=>{
    this.allTv=res.results.splice(0,10)


  })

}

getPeople(category: string){
  this._MoviesService.getTrending("person").subscribe(res=>{
    this.allPeople=res.results.splice(0,10)


  })

}


}
