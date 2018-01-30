import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../globalClasses/Http.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  providers : [HttpService]  
})
export class IntroductionComponent implements OnInit {
  DATA = {};
  // TODO set correct url
  introductionUrl : string = '';

  constructor(private _http : HttpService) { 

  }
  

  ngOnInit() {
    this._http.getRequest(this.introductionUrl , {act : 'get_video'})
              .subscribe(
                res => this.DATA = res,
                error => console.log('error : ' + error)
              )
  }

}
