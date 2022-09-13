import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient:HttpClient) { }
  getTrending(category: string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${category}/week?api_key=e63b2a1cb30f84a2ef6608376f145cca`)
  }
  getMovieDetails(id: any):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e63b2a1cb30f84a2ef6608376f145cca&language=en-US`)
  }
}

