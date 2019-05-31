import { Component, OnInit } from '@angular/core';
import {VehiclesService} from "./vehicles.service";
import {Vehicles} from "./vehicles";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  constructor(private service: VehiclesService) { }

  vehicles: Vehicles[] = [];
  searchString: string;

  ngOnInit() {
    this.service.getData('vehicles')
      .subscribe(resp => {
        this.vehicles = resp;
      })
  }

}
