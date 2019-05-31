import { Component, OnInit } from '@angular/core';
import { SpeciesService } from "./species.service";
import { Species } from "./species";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  constructor(private service: SpeciesService) { }

  species: Species[] = [];
  searchString: string = '';
  ngOnInit() {
    this.service
      .getData('species')
      .subscribe(resp => {
        this.species = resp;
        console.log(this.species);
      })
  }

}
