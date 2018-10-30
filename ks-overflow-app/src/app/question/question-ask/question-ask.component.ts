import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { QuestionService } from '../question.service';
import { UserService } from '../../user/user.service';
import { newGuid } from '../../shared/utility';


@Component({
  selector: 'app-question-ask',
  templateUrl: './question-ask.component.html',
  styleUrls: ['./question-ask.component.css']
})
export class QuestionAskComponent implements OnInit {

  question: Question = new Question();
  tags: string;

  constructor(private questionService:QuestionService,private userService:UserService) {

   }

  ngOnInit() {
    this.question.userId = this.userService.getCurrentUserId();
  }

  askQuestion(){
    this.question.tags = this.tags.split(' ');
    this.question.id = newGuid()
    this.question.answerCount=0;
    this.question.date = Date.now();
    this.question.hasAccepted = false;
    this.question.score = 0;
    this.questionService.saveQuestion(this.question).subscribe(s=>{
      alert("Question saved successfully");
    });
  }

}
