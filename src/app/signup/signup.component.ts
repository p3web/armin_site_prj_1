import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators , FormBuilder , AbstractControl } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {validatorCustom} from '../globalClasses/validatorClass';
import { HttpService } from '../globalClasses/Http.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',  
  providers : [HttpService]
})
export class SignupComponent implements OnInit {  
  // TODO: set Correct Address
  SignUpUrl : string = 'http://w3pa.com/saku/phpCode/controller_robo/controller_user.php';

  // form Model
  signUp : FormGroup;
  first_name : AbstractControl;
  last_name : AbstractControl;
  email : AbstractControl;
  company_name : AbstractControl;

  
  DATA={};

  constructor (fb : FormBuilder , private _http : HttpService){    
    // custom Validator
    let cv : validatorCustom = new validatorCustom();
    // create formGruop and validator
    this.signUp = fb.group({
      'first_name' : ['' , [Validators.required , cv.letter]],
      'last_name' : ['' , [Validators.required, cv.letter]],
      'email' : ['' , [Validators.email,Validators.required]],
      'company_name' : ['' , Validators.required]
    })    
    // form Controls
    this.first_name = this.signUp.controls['first_name'];
    this.last_name = this.signUp.controls['last_name'];
    this.email = this.signUp.controls['email'];
    this.company_name = this.signUp.controls['company_name'];
  }

  onSubmit(Form) {
      
    Form['act'] = 'set_user';      
    this._http.getRequest(this.SignUpUrl , Form).subscribe(
      res => this.DATA = res,
      error => console.log(error),
      () => console.log(this.DATA)
      
    )
  }

  ngOnInit() {
  }

}
