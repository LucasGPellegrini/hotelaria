import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private router: Router ) {}

  onClickContinuar():any {
    const cpf = <HTMLInputElement>document.getElementById("cpfinput")

    if ((/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/).test(cpf.value) != true) {
      alert("Formato do CPF inválido!")
    }

    // TODO: GET + verif -> home
    else {
      this.router.navigate(['/home']);
    }
  }

  onClickCadastrar():any {
    this.router.navigate(['/inicio/cadastro']);
  }
}
