import { Component, OnInit, Input } from '@angular/core';
import { ApiPetsService } from '../services/api.pets.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  pet: any;
  editedPet: {
    name: "",
    animalType: "",
    description: "",
    skills: string[],
  };
  newSkill: string = '';

  constructor(
    private _http: ApiPetsService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.getPet()
  }

  getPet() {
    this._route.params.subscribe((params: Params) => {
      let petId = params['petId'];
      let obs = this._http.getPet(petId)
      obs.subscribe((data: any) => {
        if (data.status == "success") {
          this.pet = data.results;
          this.editedPet = data.results;
          // console.log('pet:', this.pet);
          // console.log('editedPet', this.editedPet);
        }
        else {
          this._router.navigate(['/home'])
        }
      });
    });
  }

  editPet() {
    let obs = this._http.editPet(this.editedPet);
    obs.subscribe((data:any) => {
      // console.log(data);
      if (data.status == "success") {
        // let petId = data.results._id;
        this._router.navigate(['/pets', this.pet._id]);
      }
      else {
        event.preventDefault();
      }
    });
  }

  resetForm() {
    if (confirm('Are you sure?')){
      this.editedPet = this.pet;
    }
  }

  cancelForm() {
    if (confirm('Are you sure?')){
      event.preventDefault();
      this._router.navigate(['/pets', this.pet._id]);
      // this._router.navigate(['/pets', this.pet._id]);
    }
  }

  addSkill(){
    if (this.newSkill.trim() !== '') {
      this.editedPet.skills.push(this.newSkill);
      this.newSkill = '';
    }
  }

  deleteSkill(skillIdx){
    if (confirm("Are you sure you want to delete this skill?")){
      event.preventDefault()
      this.editedPet.skills.splice(skillIdx,1)
      this.editedPet.skills = [...this.editedPet.skills]
    }
  }
}
