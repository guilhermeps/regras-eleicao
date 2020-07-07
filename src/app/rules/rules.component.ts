import { Component, OnInit } from '@angular/core';
import { IRule, RulesService } from '../rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules: IRule[];
  filteredRules: IRule[];
  sideBarOpen = true;
  searchTerm: string;
  
  constructor(private service: RulesService) {
    this.rules = this.service.getRules();
  }

  ngOnInit(): void {
    this.filteredRules = this.rules;
    this.searchTerm = '';
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
