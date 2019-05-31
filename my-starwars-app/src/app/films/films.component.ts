import { Component, OnInit } from '@angular/core';
import { Films } from "./Films";
import { FilmsService } from "./films.service";


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  providers: [ FilmsService ]
})
export class FilmsComponent implements OnInit {

  constructor( private service: FilmsService) { }
  films: Films[] = [];
  searchString: string = '';
  ngOnInit() {
    this.service
      .getData('films')
      .subscribe((resp) => {
        console.log(resp);
        this.films = resp;
      })
  }
}
