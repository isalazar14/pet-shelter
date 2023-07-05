import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';


const routes: Routes = [
  { path: "pets/new", pathMatch: "full", component: NewPetComponent },
  { path: "", pathMatch: "full", redirectTo: "/pets" },
  { path: "pets/:petId/edit", component: EditPetComponent },
  { path: "pets/:petId", component: PetDetailsComponent },
  { path: "pets", component: HomeComponent },
  { path: "**", redirectTo: "/pets" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
