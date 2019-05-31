import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Starships} from "./starships";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getData(str) : Observable<Starships[]> {
    return  this.http.get('https://swapi.co/api/' + str)
      .pipe(map((data) => {
        let list = data['results'];
        return list.map((starship: any) => {
          return {
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacture,
            cost_in_credits: starship.cost_in_credits,
            length: starship.length,
            max_atmosphering_speed: starship.max_atmosphering_speed,
            crew: starship.crew,
            passengers: starship.passengers,
            cargo_capacity: starship.cargo_capacity,
            consumables: starship.consumables,
            hyperdrive_rating: starship.hyperdrive_rating,
            MGLT: starship.MGLT,
            starship_class: starship.starship_class,
            pilots: starship.pilots,
            films: starship.films,
            created: starship.created,
            edited: starship.edited,
            url: starship.url
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
