import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-rated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.css',
})
export class TopRatedComponent implements OnInit {
  topRatedMovies: any[] = [];
  errorMessage: string | null = null;
  title = 'Top Rated';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchTopRatedMovies();
  }

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
