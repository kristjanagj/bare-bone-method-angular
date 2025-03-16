import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie, MovieResponse } from '../movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  trendingMovies: any[] = [];
  topRatedMovies: any[] = [];
  errorMessage: string | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchPopularMovies();
    this.fetchTrendingMovies();
    this.fetchTopRatedMovies();
  }
  fetchPopularMovies(): void {
    this.movieService.getComingSoonMovies().subscribe(
      (data: MovieResponse) => {
        if (data && data.results) {
          this.movies = data.results; // Extract the results array
          this.errorMessage = null;
        } else {
          this.errorMessage = 'No movies found.';
        }
      },
      (error) => {
        console.error('API Error:', error);
        this.movies = [];
        this.errorMessage = 'Failed to load movies. Please try again later.';
      }
    );
  }
  // Fetch Trending Movies
  fetchTrendingMovies(): void {
    this.movieService.getTrendingNow().subscribe(
      (data) => {
        this.trendingMovies = data.results;
        this.errorMessage = null;
      },
      (error) => {
        console.error('API Error:', error);
        this.errorMessage =
          'Failed to load trending movies. Please try again later.';
      }
    );
  }
  // Fetch Top Rated Movies
  fetchTopRatedMovies(): void {
    this.movieService.getTopRatedMovies().subscribe(
      (data) => {
        this.topRatedMovies = data.results;
        this.errorMessage = null;
      },
      (error) => {
        console.error('API Error:', error);
        this.errorMessage =
          'Failed to load top-rated movies. Please try again later.';
      }
    );
  }
}
