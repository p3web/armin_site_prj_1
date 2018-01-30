import { Component, OnInit } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { HttpService } from '../../../globalClasses/Http.service';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators , FormBuilder , AbstractControl } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers : [HttpService]
})
export class LoginComponent implements OnInit {
  
  // TODO : set correct url
  loginUrl : string = 'http://w3pa.com/saku/phpCode/controller_robo/controller_user.php';

  DATA = {};

  // Form Model
  login : FormGroup;
  email : AbstractControl;
  password : AbstractControl;

  constructor(fb : FormBuilder , private _http:HttpService) {
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
  }

}
