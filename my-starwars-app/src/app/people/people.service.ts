import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { People } from "./people";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getData(str) : Observable<People[]>{
    return this.http.get('https://swapi.co/api/' + str)
      .pipe(map(data => {
        let list = data['results'];
        return list.map(function(people:any) {
          return {
            name: people.name,
            height: people.height,
            mass: people.mass,
            hair_color: people.hair_color,
            skin_color: people.skin_color,
            eye_color: people.eye_color,
            birth_year: people.birth_year,
            gender: people.gender,
            homeworld: people.homeworld,
            films: people.films,
            species: people.species,
            vehicles: people.vehicles,
            starships: people.starships,
            created: people.created,
            edited: people.edited,
            url: people.url
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
