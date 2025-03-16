import { Component, OnInit } from '@angular/core';
import { MovieCardContainerComponent } from '../movie-card-container/movie-card-container.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-trending-now',
  standalone: true,
  imports: [MovieCardContainerComponent, CommonModule],
  templateUrl: './trending-now.component.html',
  styleUrl: './trending-now.component.css',
})
export class TrendingNowComponent implements OnInit {
  trendingMovies: any[] = [];
  errorMessage: string | null = null;
  title = 'Trending';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchTrendingMovies();
  }

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
}
