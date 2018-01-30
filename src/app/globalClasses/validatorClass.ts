import {FormControl , AbstractControl, FormGroup } from '@angular/forms';



export class validatorCustom {    
    // letter validator
    letter (control: FormControl) : { [s : string] : boolean} {
        if(!/^[a-zA-Z]*$/g.test(control.value))
             return {invalidLetter: true}        
    }

   

}