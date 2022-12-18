import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/models/model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  @Input() questions : IQuestion[];
  isQuestionExist : boolean = false;
  constructor() { }

  ngOnInit(): void {
   
    this.isQuestionExist = this.questions.length > 0;
  }

}
