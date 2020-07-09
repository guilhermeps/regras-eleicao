import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }

  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }

  
}
