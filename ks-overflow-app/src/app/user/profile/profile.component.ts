import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { QuestionService } from '../../question/question.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { Question } from '../../question/models/question';
import { Answer } from '../../question/models/answer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  questions: Question[];
  answeredQuestions: Question[];

  constructor(
    private userService: UserService,
    private questionService: QuestionService) { }

  ngOnInit() {
    let currentUserId = this.userService.getCurrentUserId();

    Observable.combineLatest(
      this.questionService.getQuestions(),
      this.userService.getUsers(),
      this.questionService.getAnswersByUser(currentUserId)
    ).subscribe(
      ([questions, users, answers]) => {
        this.questions = questions.filter(q => q.userId === currentUserId);
        this.questions.forEach(question => {
          question.user = users.find(f => f.id === question.userId);
        });
        let answeredQuestions = [];
        answers.forEach(a => {
          var q = questions.find(f => f.id === a.questionId);
          q.user = users.find(f => f.id === q.userId);
          answeredQuestions.push(q);
        })
        this.answeredQuestions = answeredQuestions;
      },
      err => console.error(err)
    );


    this.userService.getUser(currentUserId).subscribe(user => {
      this.user = user;
    });
  }

}
