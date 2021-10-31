import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WishingListDetailComponent} from './views/wishing-list-detail/wishing-list-detail.component';
import {LandingPageComponent} from './views/landing-page/landing-page.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {WishingListComponent} from './views/wishing-list/wishing-list.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list/:id', component: WishingListDetailComponent },
  { path: 'list', component: WishingListComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
