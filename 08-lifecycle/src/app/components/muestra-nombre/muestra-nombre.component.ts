import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html'
})
export class MuestraNombreComponent  implements OnChanges, OnInit{
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

  }


  @Input() nombre!: string

  ngOnInit():void{

  }
}
