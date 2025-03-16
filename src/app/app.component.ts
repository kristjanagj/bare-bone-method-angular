import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrendingNowComponent } from './trending-now/trending-now.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { TopRatedComponent } from './top-rated/top-rated.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TrendingNowComponent,
    ComingSoonComponent,
    MovieListComponent,
    PaginationComponent,
    FooterComponent,
    TopRatedComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bare-bone-method-angular';
}
