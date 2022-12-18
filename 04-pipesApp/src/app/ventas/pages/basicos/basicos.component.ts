import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {


  nombreLower: string = 'miguel'
  nombreUpper: string = 'MIGUEL'
  nombreCompleto: string = 'mIgUEl lOPez'


  fecha: Date = new Date()
}
