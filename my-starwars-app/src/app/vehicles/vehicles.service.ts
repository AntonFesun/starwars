import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicles} from "./vehicles";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getData(str) : Observable<Vehicles[]> {
    return this.http.get('https://swapi.co/api/' + str)
      .pipe(map(data => {
        let list = data['results'];
        return list.map(vehicle => {
          return {
            name: vehicle.name,
            model: vehicle.model,
            manufacturer: vehicle.manufacturer,
            cost_in_credits: vehicle.cost_in_credits,
            length: vehicle.length,
            max_atmosphering_speed: vehicle.max_atmosphering_speed,
            crew: vehicle.crew,
            passengers: vehicle.passengers,
            cargo_capacity: vehicle.cargo_capacity,
            consumables: vehicle.consumables,
            vehicle_class: vehicle.vehicle_class,
            pilots: vehicle.pilots,
            films: vehicle.films,
            created: vehicle.created,
            edited: vehicle.edited,
            url: vehicle.url
          }
        })
      }))
  }
}
