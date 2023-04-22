import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPageComponent } from './pages/components/sign-in-page/sign-in-page.component';
import { UrlConst } from './pages/constants/url-const';

const routes: Routes = [
  { path: '', redirectTo: UrlConst.SLASH + UrlConst.PATH_SIGN_IN, pathMatch: 'full' },
  { path: UrlConst.PATH_SIGN_IN, component: SignInPageComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
