import { Component, OnInit } from '@angular/core';
import { FundService } from 'src/app/services/fund.service';
import { IFundType, IQuestion, ISection } from 'src/app/models/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  funds : IFundType[] = [];
  selectedSection : ISection;
  questions : IQuestion[];
  constructor(private fundService : FundService) { }

  ngOnInit(): void {
    this.fundService.getTemplates().subscribe((data)=>{
      this.funds = data;
      console.log(this.funds);
    })
  }

  onSectionSelected(section : ISection){
    console.log("Selected Section", section);
    this.selectedSection = section;
  }

}
