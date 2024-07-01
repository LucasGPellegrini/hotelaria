import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';


@NgModule({
  declarations: [
    PrincipalHomeComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ],
  exports: [
    
  ]
})
export class PrincipalModule { }
