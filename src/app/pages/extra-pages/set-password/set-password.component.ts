import { Component, OnInit } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators , FormBuilder , AbstractControl } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { HttpService } from '../../../globalClasses/Http.service';
import { validatorCustom } from '../../../globalClasses/validatorClass';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  providers :[HttpService]  
})
export class SetPasswordComponent implements OnInit {
  //  TODO : set correct url
  setPassUrl : string = 'http://w3pa.com/saku/phpCode/controller_robo/controller_user.php';
  
  DATA = {};
  
  // Form model
  setPass : FormGroup;
  pass : AbstractControl;
  confirmPass : AbstractControl;

  constructor(fb:FormBuilder , private _http: HttpService) { 
     // custom Validator
    // let CV : validatorCustom = new validatorCustom();

    this.setPass = fb.group({
      'pass' : ['' , [Validators.required]],
      'confirmPass' : ['' , [Validators.required]]
    })
  }
  onSubmit(Form) {    
    Form['act'] = 'set_pass';    
    this._http.getRequest(this.setPassUrl , Form ).subscribe(
      res => this.DATA = res,
      error => console.log(error),
      () => console.log(this.DATA)  
    );
  }
  ngOnInit() {
  }

}
