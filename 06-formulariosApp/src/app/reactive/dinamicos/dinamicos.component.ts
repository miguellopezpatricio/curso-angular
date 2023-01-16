import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {


  miFormulario: FormGroup = this.formBuilder.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    favoritos:this.formBuilder.array([
      ['Metal Gear'],
      ['Death Stranding']
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.formBuilder.control('',Validators.required)

  // miFormulario... this.fb {
  //    nombre: ... '', required, minlength 3
  // }
  
  constructor(private formBuilder: FormBuilder){

  }

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
    // imprimir valor formulario solo si es válido
    console.log(this.miFormulario.value)
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return
    }

   // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))
     this.favoritosArr.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required))

    this.nuevoFavorito.reset()
  }


  borrar(index: number){
    this.favoritosArr.removeAt(index)
  }
}
