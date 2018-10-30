import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { QuestionService } from '../question.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/models/user';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[] = [];
  users: User[] = [];

  constructor(
    private _questionService: QuestionService,
    private _userService: UserService
  ) { }

  ngOnInit() {
    Observable.combineLatest(
      this._questionService.getQuestions(),
      this._userService.getUsers()
    ).subscribe(
      ([questions, users]) => {
        this.users = users;
        questions.forEach(question => {
          question.user = this.users.find(f => f.id === question.userId);
        });
        this.questions = questions;
      },
      err => console.error(err)
    );
  }

}
