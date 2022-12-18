import { Component, OnInit, Input } from '@angular/core';
import { IQuestion, ISection } from 'src/app/models/model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() section : ISection;
  isTextArea : boolean = false;
  @Input() question : IQuestion;
  constructor() { }

  ngOnInit(): void {
    
  }

}
