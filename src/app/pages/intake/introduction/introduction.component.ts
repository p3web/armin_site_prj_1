import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../globalClasses/Http.service';
//import {MainMenuComponent} from '../../../a2-components/main-menu/main-menu.component';

@Component({
  selector: 'app-introduction',  
  templateUrl: './introduction.component.html',  
  providers : [HttpService]  
})
export class IntroductionComponent implements OnInit {
  DATA = {};
 
  // TODO set correct url
  introductionUrl : string = 'assets/test/tests.json';

  constructor(private _http : HttpService) { 
     
  }
  

  ngOnInit() {
    
    // let Menu : MainMenuComponent;
    // Menu.getMainMenuItems(2);
    this._http.getRequest(this.introductionUrl , {act : 'get_video'})
              .subscribe(
                res => this.DATA = res,
                error => console.log('error : ' + error),
                () =>  console.log(this.DATA)
              )              
  }

}
