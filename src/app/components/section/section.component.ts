import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { IQuestion, ISection } from 'src/app/models/model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() selectedSection : ISection ;
  questions : IQuestion[] = [];

  @Output() sectionSelected : EventEmitter<ISection> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log("section", this.selectedSection)
    if (this.selectedSection){
      this.questions = this.selectedSection.questions;
    }
  }

  onSectionClick(section : ISection){
    //this.sectionSelected.emit(this.section);
    
  }
}
