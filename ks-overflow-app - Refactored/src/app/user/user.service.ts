import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user';
import { QuestionVote, AnswerVote } from '../question/models/vote';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${environment.serviceUrl}/users`);
  }

  public getUser(id: string): Observable<User> {
    return this._http.get<User>(`${environment.serviceUrl}/users/${id}`);
  }

  public login(name: string, password:string): Observable<User[]>{
    return this._http.get<User[]>(`${environment.serviceUrl}/users?userName=${name}&password=${password}`);
  }

  public getCurrentUserId(): string {
    return localStorage.getItem('userId');
  }

  public getUserQuestionVotes(id:string): Observable<QuestionVote[]>{
    return this._http.get<QuestionVote[]>(`${environment.serviceUrl}/questionVotes?userId=${id}`);
  } 

  public getUserAnswerVotes(id:string): Observable<AnswerVote[]>{
    return this._http.get<AnswerVote[]>(`${environment.serviceUrl}/answerVotes?userId=${id}`);
  } 

}

