import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { NgxTranslateModule } from '../ngx-translate/ngx-translate.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    NgxTranslateModule
  ]
})
export class CoreModule { }
