import { Component, OnInit, Input } from '@angular/core';
import { ApiPetsService } from '../services/api.pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})

export class NewPetComponent implements OnInit {

  newPet: any;
  newSkill: String = ''

  constructor(
    private _http: ApiPetsService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.newPet = {
      name: "",
      animalType: "",
      description: "",
      skills: [],
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

  addSkill(){
    if (this.newSkill.trim() !== '') {
      this.newPet.skills.push(this.newSkill);
      this.newSkill = '';
    }
  }

  deleteSkill(skillIdx){
    if (confirm("Are you sure you want to delete this skill?")){
      event.preventDefault()
      this.newPet.skills.splice(skillIdx,1)
      this.newPet.skills = [...this.newPet.skills]
    }
  }

}
