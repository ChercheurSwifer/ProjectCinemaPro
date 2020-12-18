import { Time } from "@angular/common";

export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Formulaire
{
      Titre: string;
      DateFilm: Date;
      HeureFilm: Time;
}

