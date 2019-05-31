import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Species} from "./species";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getData(str) : Observable<Species[]> {
    return this.http.get('https://swapi.co/api/' + str)
      .pipe(map((data) => {
        let list = data['results'];
        return list.map(function (species: any) {
          return {
            name: species.name,
            classification: species.classification,
            designation: species.designation,
            average_height: species.average_height,
            skin_colors: species.skin_colors,
            hair_colors: species.hair_colors,
            eye_colors: species.eye_colors,
            average_lifespan: species.average_lifespan,
            homeworld: species.homeworld,
            language: species.language,
            people: species.people,
            films: species.films,
            created: species.created,
            edited: species.edited,
            url: species.url
          }
        })
          .sort((el1, el2) => {
            if (el1.name < el2.name) {
              return -1;
            } else if (el1.name > el2.name) {
              return 1;
            }
          });

      }))
  }
}
