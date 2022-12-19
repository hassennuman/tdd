import { Component, Input, OnInit } from '@angular/core';
import { ISubQuestion } from 'src/app/models/model';

@Component({
  selector: 'app-sub-question',
  templateUrl: './sub-question.component.html',
  styleUrls: ['./sub-question.component.css']
})
export class SubQuestionComponent implements OnInit {
  @Input() subQuestions : ISubQuestion[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
