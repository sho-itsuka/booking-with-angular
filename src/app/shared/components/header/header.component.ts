import { RoutingService } from 'src/app/core/services/routing.service';
import { UrlConst } from 'src/app/pages/constants/url-const';

import { Component } from '@angular/core';

@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls:  ['./header.component.scss']
})
export class HeaderComponent {
  initialDisplayScreenUrl: string = UrlConst.SLASH + UrlConst.PATH_HOME;

  constructor (
    public routingService: RoutingService
  ) {}

  clickSignOut(): void {
    this.routingService.navigate(UrlConst.PATH_SIGN_IN);
  }

}
