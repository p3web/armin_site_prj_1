import { Injectable } from '@angular/core';

import { MainMenuItem } from './main-menu-item';
import { MAINMENUITEMS , MenuItem } from './mock-main-menu-items';

@Injectable()
export class MainMenuService {
  getMainMenuItems(): Promise<MainMenuItem[]> {
    return Promise.resolve(MenuItem);
  }
}