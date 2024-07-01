import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroHomeComponent } from './cadastro-home/cadastro-home.component';


@NgModule({
  declarations: [
    CadastroHomeComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ],
  exports: [
    
  ]
})
export class CadastroModule { }
