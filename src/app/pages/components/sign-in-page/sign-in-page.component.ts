import { RoutingService } from 'src/app/core/services/routing.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector:    'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls:  ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(
    public  translateService: TranslateService,
    private routingService:   RoutingService
  ) {}

  /**
   * on init
   */
  ngOnInit(): void {
    this.setupLanguage();
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

  // --------------------------------------------------------------------------------
  // private methods
  // --------------------------------------------------------------------------------

  // ブラウザに設定されているメインの言語を取得しTranslateServiceに設定
  private setupLanguage() {
    this.translateService.setDefaultLang(this.getLanguage(navigator.language));
    this.translateService.use(this.getLanguage(navigator.language));
  }

  // 「言語-ロケール」が返ってきたときに言語だけを取り出す
  private getLanguage(language: string): string {
    const CHAR_HYPHEN = '-';
    if (language.indexOf(CHAR_HYPHEN) > 0) {
      const splittedLanguage: string[] = language.split(CHAR_HYPHEN);
      return splittedLanguage[0];
    }
    return language;
  }

}
