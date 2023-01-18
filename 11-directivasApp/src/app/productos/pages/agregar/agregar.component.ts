import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  texto1: string = 'Mi nombre'
  color: string = 'red'

  miFormulario: FormGroup = this.formBuilder.group({ 
    nombre:['',Validators.required]
  })

  constructor(private formBuilder: FormBuilder){}


  tieneError(campo: string):boolean{

    return this.miFormulario.get(campo)?.invalid || false

  }

  cambiarNombre(){
    this.texto1 = Math.random().toString()

  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.color = color
  }
}
