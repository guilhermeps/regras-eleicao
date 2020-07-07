import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }

  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }

  
}
