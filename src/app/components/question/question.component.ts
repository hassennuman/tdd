import { Component, OnInit, Input } from '@angular/core';
import { ISection } from 'src/app/models/model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() section : ISection;
  isTextArea : boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

}
