import { Component, Input, OnInit } from '@angular/core';
import { ISection } from 'src/app/models/model';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  @Input() sections : ISection[] = [];
  isSectionsExist : boolean = false;
  seletedSection : ISection;

  constructor() { }

  ngOnInit(): void {
    this.isSectionsExist = this.sections.length > 0;
  }
  onSectionSelect(section : ISection){
    this.seletedSection = section;
    this.isSectionsExist = true;
    console.log("selected section", this.seletedSection);
  }

}
