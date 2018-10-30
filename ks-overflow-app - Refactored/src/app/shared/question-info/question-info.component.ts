import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../question/models/question';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.css']
})
export class QuestionInfoComponent implements OnInit {
  @Input() question: Question;
  constructor() { }

  ngOnInit() {
  }

}
