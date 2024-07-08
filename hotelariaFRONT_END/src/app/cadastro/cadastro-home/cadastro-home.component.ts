import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { pegaUsuario, criaUsuario } from './../../controller/rest'

@Component({
  selector: 'app-cadastro-home',
  templateUrl: './cadastro-home.component.html',
  styleUrls: ['./cadastro-home.component.css']
})
export class CadastroHomeComponent {
  constructor( private router: Router ) {}

  async onClickContinuar():Promise<any> {
    const cpf = <HTMLInputElement>document.getElementById('cpfinput')
    const nome = <HTMLInputElement>document.getElementById('nomeinput')
    const nasc = <HTMLInputElement>document.getElementById('nascinput')

    let data_nasc = new Date()

    let alerta:String = ''

    if ((/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/).test(cpf.value) != true) {
      alerta += "\nFormato do CPF inválido!\n"
    }
    if ((/^[A-Za-z]+(\s[A-Za-z]+)+$/).test(nome.value) != true) {
      alerta += "Formato do Nome inválido!\n"
    }
    if (nasc.valueAsDate == null) {
      alerta += "Insira uma data"
    } else {
      data_nasc = nasc.valueAsDate
    }
    

    if (alerta !== '') {
      alert(alerta)
    } else {
      const usuario = await pegaUsuario(cpf.value)

      if (usuario) {
        alert("CPF já condiz com um usuário cadastrado!")
      }
      else {
        await criaUsuario(cpf.value, nome.value, data_nasc);

        alert("Usuario criado!")

        this.router.navigate(['/inicio']);
      }
    }
  }
}
