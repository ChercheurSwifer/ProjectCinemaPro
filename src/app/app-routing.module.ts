import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { FilmoComponent } from './composant/filmo/filmo.component';
import { MovieSearchComponent } from './composant/movie-search/movie-search.component';
import { ReservationComponent } from './composant/reservation/reservation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'rese', component: MovieSearchComponent},
  { path: 'reservo', component: ReservationComponent},
  { path: 'filmo', component: FilmoComponent},


  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
