import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    pais:['', Validators.required]
  })

  // llenar selectores
  regiones: string[] = []
  paises: PaisSmall[] = []

  constructor(private formBuilder: FormBuilder,
              private paisesService: PaisesService){

  }
  ngOnInit(): void {
    this.regiones = this.paisesService.regiones

    //cuando cambie la región
    this.miFormulario.get('region')?.valueChanges
    .subscribe( region => {
      console.log(region)
      this.paisesService.getPaisesPorRegion(region)
      .subscribe( paises => {
        console.log(paises)
        this.paises = paises
      })
    })
  }

  guardar(){
    console.log(this.miFormulario.value)
  }
}
