import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../globalClasses/Http.service';
import { TRANSLATIONS } from '@angular/core/src/i18n/tokens';
import { Response } from '@angular/http/src/static_response';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
  providers : [HttpService]
})
export class NavbarComponent implements OnInit {  
  @Input() title: string;
  @Input() openedSidebar: boolean = false;
  @Output() sidebarState = new EventEmitter();

  DATA = {};
  
  nameLetter:string;  

  userUrl : string = 'assets/test/user.json';

  constructor(private _http : HttpService) {
  
  }

  loadData(){
    let Data = this.DATA[0];
    if(Data.avatar == '')
    {
      let name:any = Data.first_name +' '+ Data.last_name;
      name = name.split(' ');
      this.nameLetter = '';
      for(let i =0 ; i < name.length ; i++ ){
        this.nameLetter += name[i][0].toLocaleUpperCase();
      }
    }
  }

  open(event) {
    let clickedComponent = event.target.closest('.nav-item');
    let items = clickedComponent.parentElement.children;

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }
    clickedComponent.classList.add('opened');
  }

  close(event) {
    let clickedComponent = event.target;
    let items = clickedComponent.parentElement.children;

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }
  }

  openSidebar() {
    this.openedSidebar = !this.openedSidebar;
    this.sidebarState.emit();
  }

  ngOnInit() {
    this._http.getRequest(this.userUrl , {})
              .subscribe(
                res => this.DATA = res,
                error => console.log(error),
                () =>   this.loadData()
              );

    
  }
}