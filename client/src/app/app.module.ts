import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ApiPetsService } from './services/api.pets.service';
import { NewPetComponent } from './new-pet/new-pet.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { AuthBarComponent } from './auth-bar/auth-bar.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewPetComponent,
    PetDetailsComponent,
    EditPetComponent,
    AuthBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiPetsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
