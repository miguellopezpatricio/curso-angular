import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Susana'
  genero: string = 'femenino'
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }
    // i18nPlural
    clientes: string[]= ['María','Pedro','Juan']
    clientesMapa = {
      '=0':'no tenemos clientes esperando.',
      '=1':'tenemos 2 clientes esperando.',
      'other':'tenemos # clientes esperando.'
    }
    

}
