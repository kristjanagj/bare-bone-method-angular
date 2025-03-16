import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css',
})
export class ComingSoonComponent implements OnInit {
  upcomingMovies: any[] = [];
  errorMessage: string | null = null;
  title = 'Upcoming';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchComingSoonMovies();
  }

  fetchComingSoonMovies(): void {
    this.movieService.getComingSoonMovies().subscribe(
      (data) => {
        this.upcomingMovies = data.results; // Assuming the API returns a 'results' array
        this.errorMessage = null;
      },
      (error) => {
        console.error('API Error:', error);
        this.errorMessage =
          'Failed to load upcoming movies. Please try again later.';
      }
    );
  }
}
