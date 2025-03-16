import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  //private baseUrl = 'https://api.themoviedb.org/3/movie'; // The base URL for movie-related API requests
  private apiKey = 'acd9f928cbd7f0a07860670377c1fad4'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  // Fetch Trending Now Movies
  getTrendingNow(): Observable<any> {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  // Fetch Top Rated Movies
  getTopRatedMovies(): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  // Fetch Coming Soon Movies
  getComingSoonMovies(): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
