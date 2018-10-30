import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppLayoutComponent } from './_layout/app-layout.component';
import { LoginComponent } from './login/login.component';

import { QuestionModule } from './question/question.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './_layout/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LoginComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    QuestionModule,
    UserModule,
    RouterModule.forRoot([
      //Site routes goes here 
      {
        path: '',
        component: AppLayoutComponent,
        children: [
          { path: '', redirectTo: '/question/list', pathMatch: 'full' },
        ]
      },
      //no layout routes
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
