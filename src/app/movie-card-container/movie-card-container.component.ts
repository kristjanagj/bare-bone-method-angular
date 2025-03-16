import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card-container.component.html',
  styleUrl: './movie-card-container.component.css',
})
export class MovieCardContainerComponent {
  @Input() movies: any[] = []; // An array to receive movie data

  // constructor() {}
}
