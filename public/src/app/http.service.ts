import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  currentpet: any;

  constructor(private _http: HttpClient) { }

  getAllPets() {
    return this._http.get(`${environment.apiBaseURL}/pets`);
  }
  getPet(petId) {
    return this._http.get(`${environment.apiBaseURL}/pets/${petId}`);
  }
  createPet(newPet) {
    return this._http.post(`${environment.apiBaseURL}/pets`, newPet);
  }
  editPet(editedPet) {
    return this._http.put(`${environment.apiBaseURL}/pets/${editedPet._id}`, editedPet);
  }
  deletePet(petId) {
    return this._http.delete(`${environment.apiBaseURL}/pets/${petId}`);
  }
}
