import { Component } from '@angular/core';
import { MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  items: MenuItem[] = [
    {
      label:'Pipes de Angular',
      icon:'pi pi-desktop',
      items:[
        {
        label:'Textos y fechas',
        icon:'pi pi-align-left',
        routerLink:'/'
      },
      {
        label:'Números',
        icon:'pi pi-dollar',
        routerLink:'numeros'
      },
      {
        label:'No comunes',
        icon:'pi pi-globe',
        routerLink:'no-comunes'
      }
       ]
    },
    {
      label:'Pipes personalizados',
      icon:'pi pi-cog',
      routerLink:'ordenar'
    }
  ];


}
