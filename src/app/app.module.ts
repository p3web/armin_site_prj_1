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

import {FormControl, FormGroupDirective, NgForm, Validators , FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

// routers
import { RouterModule,Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';

const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'lostpass', component: LostPasswordComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LostPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   MatInputModule,
   MatButtonModule,
   MatCardModule,
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
