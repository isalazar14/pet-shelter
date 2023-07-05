import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})

export class NewPetComponent implements OnInit {

  newPet: any;

  constructor(
    private _http: HttpService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.newPet = {
      name: "",
      petType: "",
      description: "",
      skill1: "",
      skill2: "",
      skill3: "",
    }
    // console.log("new pet:", this.newPet);
    
  }

  createPet() {
    let obs = this._http.createPet(this.newPet);
    obs.subscribe((data:any) => {
      // console.log(data);
      if (data.status == "success") {
        let petId = data.results._id;
        this._router.navigate(['/pets', petId]);
      }
      else {
        event.preventDefault();
      }
    });
  }

  resetForm() {
    if (confirm('Are you sure?')){
      this.newPet = {name:""};
    }
  }
  
  cancelForm() {
    if (confirm('Are you sure?')){
      event.preventDefault();
      this._router.navigate(['/pets']);
    }
  }

}
