import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composant/header/header.component';
import { FooterComponent } from './composant/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmoComponent } from './composant/filmo/filmo.component';
import { MovieCardComponent } from './composant/movie-card/movie-card.component';
import { DefaultImagePipe } from './utils/default-image.pipe';
import { EllipsifyPipe } from './utils/ellipsify.pipe';
import { SplitStringPipe } from './utils/split-string.pipe';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { MovieSearchComponent } from './composant/movie-search/movie-search.component';
import { ReservationComponent } from './composant/reservation/reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmoComponent,
    MovieCardComponent,
    DefaultImagePipe,
    EllipsifyPipe,
    SplitStringPipe,
    MovieSearchComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
