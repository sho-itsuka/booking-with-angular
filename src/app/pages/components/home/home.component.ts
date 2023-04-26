import { TitleI18Service } from 'src/app/shared/services/title-i18.service';

import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { UrlConst } from '../../constants/url-const';

@Component({
  selector:    'app-home',
  templateUrl: './home.component.html',
  styleUrls:  ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  constructor(
    private translateService: TranslateService,
    private titleI18Service:  TitleI18Service,
  ) {}

  /**
   * OnInit
   */
  ngOnInit(): void {
  }

  /**
   * after view checked
   */
  ngAfterViewChecked(): void {
    this.titleI18Service.setTitle(UrlConst.PATH_HOME);
  }
}
