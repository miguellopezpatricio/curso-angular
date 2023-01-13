import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm

  initForm = {
    producto: 'RTX',
    precio: 10,
    existencias: 1
  }

  guardar() {
    // console.log(this.miFormulario)
    console.log('Posteo correcto')
    this.miFormulario.resetForm(
    //   {
    //   producto: 'Su producto',
    //   precio: 0,
    //   existencias: 0
    // }
    )
  }

  nombreValido(): boolean {

    return (this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched)

  }

  precioValido(): boolean {

    return (this.miFormulario?.controls['precio']?.touched &&
      this.miFormulario?.controls['precio']?.value < 0)

  }
}
