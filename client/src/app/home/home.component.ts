import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPets: any;

  constructor(
    private _http: HttpService,
    // private _route: ActivatedRoute, /* for reference for other components */
    // private _router: Router /* for reference for other components */
    ) {
      console.log("construction HomeComponent")
    }

    ngOnInit() {
    console.log("HomeComponent init")
    this.allPets = [];
    this.getAllPets();
  }

  getAllPets() {
    let obs = this._http.getAllPets();
    obs.subscribe((data: any) => {
      this.allPets = data.results;
      console.log(this.allPets);
    })
  }
}
