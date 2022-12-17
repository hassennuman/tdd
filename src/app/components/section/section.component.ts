import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { ISection } from 'src/app/models/model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() section : ISection ;

  @Output() sectionSelected : EventEmitter<ISection> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSectionClick(){
    this.sectionSelected.emit(this.section);
  }
}
