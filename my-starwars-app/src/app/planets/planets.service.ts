import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Planets } from "./planets";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getData(str): Observable<Planets[]> {
    return this.http.get('https://swapi.co/api/' + str)
      .pipe(map((data) => {
        let list = data['results'];
        return list.map(function (planet: any) {
          return {
            name: planet.name,
            rotation_period: planet.rotation_period,
            orbital_period: planet.orbital_period,
            diameter: planet.diameter,
            climate: planet.climate,
            gravity: planet.gravity,
            terrain: planet.terrain,
            surface_water: planet.surface_water,
            population: planet.population,
            residents: planet.residents,
            films: planet.films,
            created: planet.created,
            edited: planet.edited,
            url: planet.url
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
