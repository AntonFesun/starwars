import { Component, OnInit } from '@angular/core';
import { PeopleService } from "./people.service";
import { People } from "./people";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  providers: [ PeopleService ]
})
export class PeopleComponent implements OnInit {

  constructor(private service: PeopleService) { }
  people: People[] = [];
  str: string = '';
  ngOnInit() {
    this.service
      .getData('people')
      .subscribe((resp) => {
        this.people = resp;
        console.log(this.people);
      })
  }

}
