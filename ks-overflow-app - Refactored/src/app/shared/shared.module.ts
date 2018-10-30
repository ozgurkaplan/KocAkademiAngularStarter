import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from '../question/question.service';
import { UserService } from '../user/user.service';
import { AuthGuard } from '../auth/auth.guard';
import { TagListComponent } from './tag-list/tag-list.component';
import { QuestionInfoComponent } from './question-info/question-info.component';
import { QuestionInfoDetailComponent } from './question-info-detail/question-info-detail.component';
import { QuestionBodyComponent } from './question-body/question-body.component';
import { RouterModule } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TagListComponent,
    QuestionInfoComponent,
    QuestionInfoDetailComponent,
    QuestionBodyComponent,
    FormGroupComponent
  ],
  declarations: [
    TagListComponent,
    QuestionInfoComponent, 
    QuestionInfoDetailComponent, 
    QuestionBodyComponent, 
    FormGroupComponent],
  providers: [
    UserService,
    QuestionService,
    AuthGuard
  ]
})
export class SharedModule { }
