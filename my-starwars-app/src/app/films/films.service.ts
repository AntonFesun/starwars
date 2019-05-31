import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Films } from "./Films";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  constructor(private http: HttpClient) { }

  getData(str) : Observable<Films[]> {
    return this.http.get('https://swapi.co/api/' + str)
      .pipe(map((data) => {
        let list = data['results'];
        return list.map(function (film: any) {
          return {
            title: film.title,
            episode_id: film.episode_id,
            opening_crawl: film.opening_crawl,
            director: film.director,
            producer: film.producer,
            release_date: film.release_date,
            characters: film.characters,
            planets: film.planets,
            starships: film.starships,
            vehicles: film.vehicles,
            species: film.species,
            created: film.created,
            edited: film.edited,
            url: film.url
          }
        })
          .sort((el1, el2) => {
            if (el1.title < el2.title) {
              return -1;
            } else if (el1.title > el2.title) {
              return 1;
            }
          });

      }))
  }
}
