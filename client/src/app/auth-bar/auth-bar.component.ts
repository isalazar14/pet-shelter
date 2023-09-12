import { Component, OnInit } from "@angular/core";

@Component({
  selector: "auth-bar",
  templateUrl: "./auth-bar.component.html",
  styleUrls: ["./auth-bar.component.css"],
})
export class AuthBarComponent implements OnInit {
  isLoggedIn: boolean;

  ngOnInit() {
    this.isLoggedIn = false;
  }

  register() {
    console.log('now registered')
    this.logIn()
  }

  logIn() {
    this.isLoggedIn = true;
    console.log("logged in");
  }

  logOut() {
    this.isLoggedIn = false;
    console.log("logged out");
  }
}
