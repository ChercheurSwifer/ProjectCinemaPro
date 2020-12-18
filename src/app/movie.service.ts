import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Movie } from './movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly API_KEY = `157f9eb7`;
http: any;
  constructor(http : HttpClient) 
  { 
    this.http = http;
  }

  searchMovie(searchQuery: string): Observable<Array<Movie>>
  {
    return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`).pipe(map((response: any) => response.Search));
  }
}
