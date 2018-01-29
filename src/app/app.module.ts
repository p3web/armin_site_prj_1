import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';

import {ErrorStateMatcher} from '@angular/material/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {FormControl, FormGroupDirective, NgForm, Validators , FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

// routers
import { RouterModule,Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';
import { LoginComponent } from './login/login.component';
import { SetPasswordComponent } from './set-password/set-password.component';

const routes: Routes = [
    { path: '', redirectTo: 'setPass', pathMatch: 'full' },
    { path: 'signUp', component: SignupComponent },
    { path: 'lostPass', component: LostPasswordComponent },
    { path: 'login', component: LoginComponent },
    { path: 'setPass', component: SetPasswordComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LostPasswordComponent,
    LoginComponent,
    SetPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   MatInputModule,
   MatButtonModule,
   MatCardModule,
   MatCheckboxModule,
   FormsModule,
   ReactiveFormsModule,
   HttpModule,   
   RouterModule,   
   RouterModule.forRoot(routes)
  ],
    
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }
    ,{ provide: APP_BASE_HREF, useValue: '/' } ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
