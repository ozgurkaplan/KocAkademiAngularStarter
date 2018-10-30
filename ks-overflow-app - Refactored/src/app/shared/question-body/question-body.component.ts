import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../question/models/question';

@Component({
  selector: 'app-question-body',
  templateUrl: './question-body.component.html',
  styleUrls: ['./question-body.component.css']
})
export class QuestionBodyComponent implements OnInit {
  @Input() question: Question;
  constructor() { }

  ngOnInit() {
  }

}
