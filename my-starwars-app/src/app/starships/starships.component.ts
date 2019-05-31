import { Component, OnInit } from '@angular/core';
import {StarshipsService} from "./starships.service";
import {Starships} from "./starships";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  constructor(private service: StarshipsService) { }

  starShips: Starships[] = [];
  searchString: string = '';

  ngOnInit() {
    this.service
      .getData('starships')
      .subscribe(resp => {
        this.starShips = resp;
        console.log(this.starShips);
      })
  }

}
