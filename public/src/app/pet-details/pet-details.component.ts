import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  pet: any;
  isLiked: boolean;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getPet();
    this.isLiked = false;
  }

  getPet() {
    this._route.params.subscribe((params: Params) => {
      let petId = params['petId'];
      let obs = this._http.getPet(petId)
      obs.subscribe((data: any) => {
        if (data.status == "success") {
          this.pet = data.results;
        }
        else {
          this._router.navigate(['/home'])
        }
      });
    });
  }

  deletePet() {
    if (confirm(`are you sure you want to adopt ${this.pet.name}?!`)) {
      let obs = this._http.deletePet(this.pet._id);
      obs.subscribe( (data: any) => {
        console.log(data);
        this._router.navigate(['/pets']);
      });
    }
  }

  likePet() {
    if (this.isLiked == false) {
      this.isLiked = true;
      this.pet.likes += 1;
      let obs = this._http.editPet(this.pet);
      obs.subscribe((data: any) => {
        console.log(data);
      });
    }
  }
}
