import { Component, OnInit, Input } from '@angular/core';
import { IQuestion, ISection, ISubQuestion } from 'src/app/models/model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input() section: ISection;
  isTextArea: boolean = false;
  @Input() question: IQuestion;
  subQuestions: ISubQuestion[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.question) {
      this.subQuestions = this.question.subQuestions as ISubQuestion[];
    }
  }
}
