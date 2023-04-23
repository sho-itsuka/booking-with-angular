import {
    YesNoDialogComponent
} from 'src/app/core/components/yes-no-dialog/yes-no-dialog.component';
import { YesNoDialogData } from 'src/app/core/models/yes-no-dialog-data';
import { RoutingService } from 'src/app/core/services/routing.service';
import { AppConst } from 'src/app/pages/constants/app-const';
import { UrlConst } from 'src/app/pages/constants/url-const';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls:  ['./header.component.scss']
})
export class HeaderComponent {
  initialDisplayScreenUrl: string = UrlConst.SLASH + UrlConst.PATH_HOME;

  constructor (
    public  routingService:   RoutingService,
    private matDialog:        MatDialog,
    private translateService: TranslateService
  ) {}

  clickSignOut(): void {
    const dialogData: YesNoDialogData = {
      title:      this.translateService.instant('menu.saveYesNoDialog.title'),
      message:    this.translateService.instant('menu.saveYesNoDialog.message'),
      captionNo:  this.translateService.instant('menu.saveYesNoDialog.captionNo'),
      captionYes: this.translateService.instant('menu.saveYesNoDialog.captionYes')
    };

    const dialogRef = this.matDialog.open(YesNoDialogComponent, {
      height: AppConst.YES_NO_DIALOG_HEIGHT,
      width:  AppConst.YES_NO_DIALOG_WIDTH,
      data:   dialogData
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.signOut();
      }
    })
  }

  // --------------------------------------------------------------------------------
  // private methods
  // --------------------------------------------------------------------------------
  private signOut(): void {
    this.routingService.navigate(UrlConst.PATH_SIGN_IN);
  }
}
