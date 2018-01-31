import { Component, OnInit } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { HttpService } from '../../../globalClasses/Http.service';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators , FormBuilder , AbstractControl } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {lang} from '../../../globalClasses/lang';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'  
})
export class LoginComponent implements OnInit {
  email_l : string;
  pass_l : string;
  signup_l:string;
  // TODO : set correct url
  loginUrl : string = 'http://w3pa.com/saku/phpCode/controller_robo/controller_user.php';

  DATA = {};

  // Form Model
  login : FormGroup;
  email : AbstractControl;
  password : AbstractControl;

  constructor(fb : FormBuilder , private _http:HttpService , private _lang : lang)  {
    this.login = fb.group({
      'email' : ['' , [Validators.required , Validators.email]],
      'password' : ['',Validators.required]
    })
   }
   
   onSubmit(Form){
     Form['act'] = 'login';
     this._http.getRequest(this.loginUrl , Form).subscribe(
      res => this.DATA = res,
      error => console.log(error),
      () => console.log(this.DATA)  
     );
   }

  ngOnInit() {
    this.email_l = this._lang.getLang('intake','business_partners.section.add_partner.field.email');    
    this.pass_l = this._lang.getLang('intake','set_password.section.set_password.field.password');    
    this.signup_l= this._lang.getLang('intake','signup.page.title');
  }

}
