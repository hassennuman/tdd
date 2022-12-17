import { Component, OnInit } from '@angular/core';
import { FundService } from 'src/app/services/fund.service';
import { IFundType, IQuestion, ISection, IStrategy } from 'src/app/models/model';

import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  funds : IFundType[] = [];
  selectedSection : ISection;
  questions : IQuestion[];
  selectedStrategy : IStrategy;
  isStrategySelected : boolean = false;

  constructor(private fundService : FundService, private router : Router) { }

  ngOnInit(): void {
    this.fundService.getTemplates().subscribe((data)=>{
      this.funds = data;
      console.log(this.funds);
    })
  }

  onSelectedStrategy(strategy : IStrategy){
    this.selectedStrategy = strategy;
    this.isStrategySelected = true;
  }
  onSectionSelected(section : ISection){
    console.log("Selected Section", section);
    this.selectedSection = section;
  }
  onTabChanged(event: MatTabChangeEvent): void {
    alert('Hell')
    switch (event.index) {
      case 0: // index of the tab
        // this is our stub tab for link
        alert(event.index)
        this.router.navigate(['dashboard']);
        break;
      case 1:
        // do stuff with content or do nothing :)
        break;
    }
  }

}
