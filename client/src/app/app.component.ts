import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  atHome: boolean;
  constructor(private _route: ActivatedRoute) { }
  
  ngOnInit() {
  }
}
