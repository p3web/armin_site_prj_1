import { Component, OnInit } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators , FormBuilder , AbstractControl } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { HttpService } from '../globalClasses/Http.service';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  providers:[HttpService]
})
export class LostPasswordComponent implements OnInit {
  //  TODO : set correct url
  lostPassUrl : string = 'http://w3pa.com/saku/phpCode/controller_robo/controller_user.php';
  // Form model
  lostPass : FormGroup;
  email : AbstractControl;

  constructor(fb:FormBuilder , private _http: HttpService) {
    this.lostPass = fb.group({
      'email' : ['' , [Validators.email,Validators.required]]
    })
   }

   onSubmit(Form) {    
    Form['act'] = 'lost_pass';      
    this._http.sendRequest(this.lostPassUrl , Form , 'GET' , console.log);
  }

  ngOnInit() {
  }

}
