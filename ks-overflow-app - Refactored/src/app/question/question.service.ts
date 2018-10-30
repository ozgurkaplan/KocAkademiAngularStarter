import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Question } from './models/question';
import { Answer } from './models/answer';
import { QuestionVote, AnswerVote } from './models/vote';


@Injectable()
export class QuestionService {

  constructor(private _http: HttpClient) { }

  public getQuestions(): Observable<Question[]> {
    return this._http.get<Question[]>(`${environment.serviceUrl}/questions?_sort=date&_order=desc`);
  }

  public getQuestion(id: string): Observable<Question> {
    return this._http.get<Question>(`${environment.serviceUrl}/questions/${id}`);
  }

  public getAnswersByUser(userId: string): Observable<Answer[]> {
    return this._http.get<Answer[]>(`${environment.serviceUrl}/answers?userId=${userId}&_sort=date&_order=desc`);
  }

  public getAnswers(questionId: string): Observable<Answer[]> {
    return this._http.get<Answer[]>(`${environment.serviceUrl}/answers?questionId=${questionId}&_sort=date&_order=desc`);
  }

  public patchQuestion(id: string, data:any): Observable<Question>{
    return this._http.patch<Question>(`${environment.serviceUrl}/questions/${id}`,data);
  }

  public patchAnswer(id: string, data:any): Observable<Answer>{
    return this._http.patch<Answer>(`${environment.serviceUrl}/answers/${id}`,data);
  }

  public saveQuestion(question: Question): Observable<Question> {
    return this._http.post<Question>(`${environment.serviceUrl}/questions`, question);
  }

  public saveAnswer(answer: Answer): Observable<Answer>{
    return this._http.post<Answer>(`${environment.serviceUrl}/answers`, answer);
  }

  public voteQuestion(vote:QuestionVote):Observable<QuestionVote>{
    return this._http.post<QuestionVote>(`${environment.serviceUrl}/questionVotes`, vote);
  }

  public voteAnswer(vote:AnswerVote):Observable<AnswerVote>{
    return this._http.post<AnswerVote>(`${environment.serviceUrl}/answerVotes`, vote);
  }

}
