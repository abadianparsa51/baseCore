import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckLoginComponent } from './check-login/check-login.component';
import { OtpComponent } from './otp/otp.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { TermsComponent } from './terms/terms.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PrivacyComponent } from './privacy/privacy.component';
import { NgOtpInputModule } from 'ng-otp-input';

const routes: Routes = [
  { path: '', component: CheckLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'privacy', component: PrivacyComponent },
  // Define other routes as needed
];

@NgModule({
  declarations: [
    CheckLoginComponent,
    OtpComponent,
    PasswordComponent,
    RegisterComponent,
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgOtpInputModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
