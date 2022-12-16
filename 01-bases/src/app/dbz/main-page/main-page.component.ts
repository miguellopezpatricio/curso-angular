import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  // por defecto para mostrar en el formulario
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }



  constructor(){

  }
}
