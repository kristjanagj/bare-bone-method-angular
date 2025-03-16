import { Routes } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { TrendingNowComponent } from './trending-now/trending-now.component';

export const routes: Routes = [
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'trending-now', component: TrendingNowComponent },
    { path: '', redirectTo: '/coming-soon', pathMatch: 'full' }  // default route
  ];
