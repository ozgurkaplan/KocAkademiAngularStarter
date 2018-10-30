import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth/auth.guard';
import { AppLayoutComponent } from '../_layout/app-layout.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'user',
        component: AppLayoutComponent,
        children: [
          { path: 'profile', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthGuard] }
        ]
      }
    ])
  ],
  declarations: [ProfileComponent, UserDetailComponent],
  providers: [ ],
})
export class UserModule { }
