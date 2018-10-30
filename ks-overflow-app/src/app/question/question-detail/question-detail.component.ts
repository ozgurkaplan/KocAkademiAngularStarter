import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../models/question';
import { UserService } from '../../user/user.service';
import { Answer } from '../models/answer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { User } from '../../user/models/user';
import { QuestionVote, AnswerVote } from '../models/vote';


@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: Question;
  answers: Answer[];
  users: User[];
  answer: Answer;

  constructor(private route: ActivatedRoute,
    private _questionService: QuestionService,
    private _userService: UserService) {
    this.answer = new Answer();
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let currentUserId = this._userService.getCurrentUserId();
    Observable.combineLatest(
      this._questionService.getQuestion(id),
      this._userService.getUsers(),
      this._questionService.getAnswers(id),
      this._userService.getUserAnswerVotes(currentUserId),
      this._userService.getUserQuestionVotes(currentUserId)
    ).subscribe(
      ([question, users, answers, answerVotes, questionVotes]) => {
        this.users = users;
        question.user = users.find(f => f.id == question.userId);
        let questionVote = questionVotes.find(f => f.questionId == id);
        question.userVote = 0;
        if (questionVote) {
          question.userVote = questionVote.vote;
        }
        this.question = question;
        answers.forEach(answer => {
          answer.user = users.find(f => f.id == answer.userId);
          answer.userVote = 0;
          let answerVote = answerVotes.find(f => f.answerId == answer.id);
          if (answerVote) {
            answer.userVote = answerVote.vote;
          }
        })
        this.answers = answers
      },
      err => console.error(err)
    );
  }

  questionVote(vote: number) {
    let questionVote = new QuestionVote();
    questionVote.questionId = this.question.id;
    questionVote.userId = this.question.userId;
    questionVote.vote = vote;
    this._questionService.voteQuestion(questionVote).subscribe(s => {
      this.question.score += vote;
      this.question.userVote = vote;
      this._questionService.patchQuestion(this.question.id, { score: this.question.score })
        .subscribe(s => console.log(s));
    });
  }

  answerVote(answer:Answer, vote: number) {
    let answerVote = new AnswerVote();
    answerVote.answerId = answer.id;
    answerVote.userId = this.question.userId;
    answerVote.vote = vote;
    this._questionService.voteAnswer(answerVote).subscribe(s => {
      answer.score += vote;
      answer.userVote = vote;
      this._questionService.patchAnswer(this.question.id, { score: answer.score })
        .subscribe(s => console.log(s));
    });
  }

  saveAnswer() {
    this.answer.userId = this.question.user.id;
    this.answer.questionId = this.question.id;
    this.answer.date = Date.now();
	this.answer.score = 0;
    this._questionService.saveAnswer(this.answer)
      .subscribe(s => {
		this.answer.userVote = 0;
        alert("Answer is saved!");
        this.question.answerCount++;
        this._questionService.patchQuestion(this.question.id, { answerCount: this.question.answerCount }).subscribe(s => console.log(s));
        this.answer.user = this.users.find(f => f.id == this.answer.userId);
        this.answers.push(this.answer);
        this.answer = new Answer();
      });

  }

}
