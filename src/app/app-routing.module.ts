import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WishingListDetailComponent} from './views/wishing-list-detail/wishing-list-detail.component';
import {LandingPageComponent} from './views/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'list/:id', component: WishingListDetailComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
