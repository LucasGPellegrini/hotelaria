import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-home',
  templateUrl: './cadastro-home.component.html',
  styleUrls: ['./cadastro-home.component.css']
})
export class CadastroHomeComponent {
  constructor( private router: Router ) {}

  onClickContinuar():any {
    const cpf = <HTMLInputElement>document.getElementById('cpfinput')
    const nome = <HTMLInputElement>document.getElementById('nomeinput')
    const nasc = <HTMLInputElement>document.getElementById('nascinput')

    let alerta:String = ''

    if ((/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/).test(cpf.value) != true) {
      alerta += "\nFormato do CPF inválido!\n"
    }
    if ((/^[A-Za-z]+(\s[A-Za-z]+)+$/).test(nome.value) != true) {
      alerta += "Formato do Nome inválido!\n"
    }
    if (nasc.valueAsDate == null) {
      alerta += "Insira uma data"
    }
    

    if (alerta !== '') {
      alert(alerta)
    }
    else {
      //TODO: POST -> insert no BD

      this.router.navigate(['/inicio']);
    }
  }
}
