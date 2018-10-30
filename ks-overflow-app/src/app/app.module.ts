import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './_layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionAskComponent } from './question/question-ask/question-ask.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionService } from './question/question.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './user/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LoginComponent,
    QuestionListComponent,
    QuestionAskComponent,
    QuestionDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      //Site routes goes here 
      {
        path: '',
        component: AppLayoutComponent,
        children: [
          { path: '', component: QuestionListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
          { path: 'profile', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthGuard] },
          { path: 'question/ask', component: QuestionAskComponent, pathMatch: 'full', canActivate: [AuthGuard] },
          { path: 'question/detail/:id', component: QuestionDetailComponent, canActivate: [AuthGuard]}
        ]
      },
      //no layout routes
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    QuestionService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
