import { Component, OnInit } from '@angular/core';
import { IRule, RulesService } from './rules.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  rules: IRule[];
  filteredRules: IRule[];
  sideBarOpen = true;
  searchTerm: string;
  value: string;

  constructor(private service: RulesService) {
    this.rules = this.service.getRules();
  }

  ngOnInit() {
    this.filteredRules = this.rules;
    this.searchTerm = '';
  }

  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }

  search(input: any) {
    const term = input.target.value ?? '';
    if (term.length > 2) {
      debugger;
      this.filteredRules = this.rules.filter(r => 
        r.searchTerm.toLowerCase().includes(term.toLowerCase()));
    } else {
      this.filteredRules = this.rules;
    }
  }
}
