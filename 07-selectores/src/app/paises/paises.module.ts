import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PaisesRoutingModule } from './paises-routing.module';
import { SelectorPagesComponent } from './pages/selector-pages/selector-pages.component';



@NgModule({
  declarations: [
    SelectorPagesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaisesRoutingModule

  ]
})
export class PaisesModule { }
