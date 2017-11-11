import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomescoreComponent }      from './homescore/homescore.component';

const routes: Routes = [
  { path: '', redirectTo: '/homescore/1', pathMatch: 'full' },
  { path: 'homescore/:id', component: HomescoreComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

