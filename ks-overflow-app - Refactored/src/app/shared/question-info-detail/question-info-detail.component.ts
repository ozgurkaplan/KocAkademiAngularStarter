import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../question/models/question';

@Component({
  selector: 'app-question-info-detail',
  templateUrl: './question-info-detail.component.html',
  styleUrls: ['./question-info-detail.component.css']
})
export class QuestionInfoDetailComponent implements OnInit {
  @Input() question: Question;
  constructor() { }

  ngOnInit() {
  }

}
