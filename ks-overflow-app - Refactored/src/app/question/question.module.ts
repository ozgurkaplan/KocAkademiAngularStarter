import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionAskComponent } from './question-ask/question-ask.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from '../_layout/app-layout.component';
import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'question',
        component: AppLayoutComponent,
        children: [
          { path: 'list', component: QuestionListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
          { path: 'ask', component: QuestionAskComponent, pathMatch: 'full', canActivate: [AuthGuard] },
          { path: 'detail/:id', component: QuestionDetailComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  declarations: [
    QuestionListComponent,
    QuestionAskComponent,
    QuestionDetailComponent,
    VoteComponent
  ],
  providers: [ ],
    
})
export class QuestionModule { }
