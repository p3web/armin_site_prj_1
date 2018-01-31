import { Component, OnInit } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators , FormBuilder , AbstractControl } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { HttpService } from '../../../globalClasses/Http.service';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styles: [`
  .mat-input-container.full-width{
      width:100%;
      text-align: right !important;
      direction: rtl;
  }
  .mat-form-field-infix{
    min-width:220px;
    width : unset;
  }
  .mat-select{
    width : 180px;
  }
  .mat-select-value,
  .mat-input-container{
    width : unset;
    margin: 0 0 0 30px;
  };
  .rtl .text-right{
    text-align:right !important;
  }
  `]
})
export class CompanyDetailsComponent implements OnInit {
  CompanyBranch = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
