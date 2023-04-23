import { UrlConst } from 'src/app/pages/constants/url-const';

import { Component } from '@angular/core';

@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls:  ['./header.component.scss']
})
export class HeaderComponent {
  initialDisplayScreenUrl: string = UrlConst.SLASH + UrlConst.PATH_HOME;

  clickSignOut(): void {

  }
}
