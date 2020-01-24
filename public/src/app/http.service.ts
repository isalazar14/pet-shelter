import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  currentpet: any;

  constructor(private _http: HttpClient) { }

  getAllPets() {
    return this._http.get('/api/pets');
  }
  getPet(petId) {
    return this._http.get(`/api/pets/${petId}`);
  }
  createPet(newPet) {
    return this._http.post(`/api/pets`, newPet);
  }
  editPet(editedPet) {
    return this._http.put(`/api/pets/${editedPet._id}`, editedPet);
  }
  deletePet(petId) {
    return this._http.delete(`/api/pets/${petId}`);
  }
}
