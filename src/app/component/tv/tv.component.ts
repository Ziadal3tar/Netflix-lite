import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  allTv:any[]=[]
  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.getTv("")
  }
  getTv(category: string){
    this._MoviesService.getTrending("tv").subscribe(res=>{
      this.allTv=res.results
    
    
    })
  
  }
}
