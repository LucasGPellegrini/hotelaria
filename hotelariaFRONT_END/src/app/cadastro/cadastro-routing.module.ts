import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroHomeComponent } from './cadastro-home/cadastro-home.component';

const routes: Routes = [
  { 
    path: 'inicio/cadastro',
    component: CadastroHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
