import { Component } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

interface Persona{
  nombre: string,
  favoritos:Favorito[]
}

interface Favorito{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = ''

  persona: Persona = {
    nombre: 'Miguel',
    favoritos: [
      {id: 1, nombre: 'Metal Gear'},
      {id: 2, nombre: 'Gato Malo'}
    ]
  }


  guardar(){
    console.log('Formulario posteado')
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1)
  }

  agregarJuego(){
    const nuevoFav: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFav})
    this.nuevoJuego = ''
  }

}
