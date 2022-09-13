import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  allPeople:any[]=[]

  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.getPeople("")

  }

  getPeople(category: string){
    this._MoviesService.getTrending("person").subscribe(res=>{
      this.allPeople=res.results


    })

  }


}
