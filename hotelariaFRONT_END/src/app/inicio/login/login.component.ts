import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { pegaUsuario } from './../../controller/rest'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private router: Router ) {}

  async onClickContinuar():Promise<any> {
    const cpf = <HTMLInputElement>document.getElementById("cpfinput")

    if ((/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/).test(cpf.value) != true) {
      alert("Formato do CPF inválido!")
    }

    else {
      const usuario = await pegaUsuario(cpf.value)

      if (usuario) {
        this.router.navigate(['/home']);
      }
      else {
        alert("CPF não condiz com nenhum usuário!")
      }
    }
  }

  onClickCadastrar():any {
    this.router.navigate(['/inicio/cadastro']);
  }
}
