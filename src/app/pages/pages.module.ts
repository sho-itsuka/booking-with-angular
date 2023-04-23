import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { NgxTranslateModule } from '../ngx-translate/ngx-translate.module';
import { HomeComponent } from './components/home/home.component';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';

@NgModule({
  declarations: [
    SignInPageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    NgxTranslateModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    SignInPageComponent,
    HomeComponent
  ]
})
export class PagesModule { }
