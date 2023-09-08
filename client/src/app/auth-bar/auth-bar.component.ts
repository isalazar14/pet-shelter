import { Component, OnInit } from "@angular/core";

@Component({
  selector: "auth-bar",
  templateUrl: "./auth-bar.component.html",
  styleUrls: ["./auth-bar.component.css"],
})
export class AuthBarComponent implements OnInit {
  isLoggedin: boolean;

  ngOnInit() {
    this.isLoggedin = false;
  }

  register() {
    console.log('now registered')
    this.logIn()
  }

  logIn() {
    this.isLoggedin = true;
    console.log("logged in");
  }

  logOut() {
    this.isLoggedin = false;
    console.log("logged out");
  }
}
