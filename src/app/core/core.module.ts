import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { NgxTranslateModule } from '../ngx-translate/ngx-translate.module';
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component';

@NgModule({
  declarations: [
    YesNoDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxTranslateModule
  ]
})
export class CoreModule { }
