import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalHomeComponent } from './principal-home/principal-home.component';

const routes: Routes = [
  { 
  path: 'home',
  component: PrincipalHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
