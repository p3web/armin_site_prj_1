import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'page-snackbar',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['snackbar.component.scss']
})
export class PageSnackbarComponent {
  pageTitle: string = 'Snackbar';

  constructor( public snackBar: MatSnackBar, private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {

  }
}
