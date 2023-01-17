import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styles: [
  ]
})
export class SelectorPagesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region:['', Validators.required],
    pais:['', Validators.required],
    frontera:['', Validators.required]
  })

  // llenar selectores
  regiones: string[] = []
  paises: PaisSmall[] = []
 // fronteras: string [] = []
 fronteras: PaisSmall[] = []

  // UI
  cargando: boolean = false


  constructor(private formBuilder: FormBuilder,
              private paisesService: PaisesService){

  }
  ngOnInit(): void {
    this.regiones = this.paisesService.regiones

    //cuando cambie la región
    // this.miFormulario.get('region')?.valueChanges
    // .subscribe( region => {
    //   console.log(region)
    //   this.paisesService.getPaisesPorRegion(region)
    //   .subscribe( paises => {
    //     console.log(paises)
    //     this.paises = paises
    //   })
    // })

    //cuando cambie la región
    this.miFormulario.get('region')?.valueChanges
            .pipe(
              tap((_) =>{
                // borrando país cuando se cambia de región en el formulario
                this.miFormulario.get('pais')?.reset('')
                this.cargando = true
              }),
              switchMap( region => this.paisesService.getPaisesPorRegion(region))
            )
            .subscribe( paises => {
              this.paises = paises
            })

      //cuando cambie el país
      this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(()=> {
        // cuando cambie país, vaciamos el array de fronteras
          this.miFormulario.get('frontera')?.reset('')
          this.cargando = true
        }),
        switchMap(codigo => this.paisesService.getPaisPorCodigo(codigo)),
        switchMap(pais => this.paisesService.getPaisesPorCodigos(pais?.borders!))
      )
      .subscribe( paises => {
      //  this.fronteras = pais?.borders || [] // si no recibe datos devuelve array vacío (país sin fronteras)
      this.fronteras = paises
        this.cargando = false
      })
  }

  guardar(){
    console.log(this.miFormulario.value)
  }
}
