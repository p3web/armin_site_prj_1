import { Component, OnInit } from '@angular/core';

import { MainMenuItem } from './main-menu-item';
import { MainMenuService } from './main-menu.service';

import {  MenuItem, MenuSubItem } from './mock-main-menu-items';

@Component({
  moduleId: module.id,
  selector: 'main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.scss'],
  providers: [MainMenuService]
})
export class MainMenuComponent {
  mainMenuItems: MainMenuItem[];

  constructor(private mainMenuService: MainMenuService) { }

  getMainMenuItems(level? : number): void {      

    if(level != null)
      MenuItem[1]['sub'].push(MenuSubItem[level]);

    this.mainMenuService.getMainMenuItems().then(mainMenuItems => this.mainMenuItems = mainMenuItems);
  }

  

  ngOnInit(): void {
    this.getMainMenuItems();
  }

  toggle(event: Event, item: any, el: any) {
    event.preventDefault();

    let items: any[] = el.mainMenuItems;

    if (item.active) {
      item.active = false;
    } else {
      for (let i = 0; i < items.length; i++) {
        items[i].active = false;
      }
      item.active = true;
    }
  }
}