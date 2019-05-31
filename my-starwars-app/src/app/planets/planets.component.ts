import { Component, OnInit } from '@angular/core';
import { PlanetsService } from "./planets.service";
import { Planets } from "./planets";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
  providers: [ PlanetsService ]
})
export class PlanetsComponent implements OnInit {

  constructor(private service: PlanetsService) { }

  planets: Planets[] = [];
  searchString: string = '';

  ngOnInit() {
    this.service
      .getData('planets')
      .subscribe(resp => {
        console.log(resp);
        this.planets = resp;
      })
  }

}
