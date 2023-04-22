import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPageComponent } from './pages/components/sign-in-page/sign-in-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInPageComponent }
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
