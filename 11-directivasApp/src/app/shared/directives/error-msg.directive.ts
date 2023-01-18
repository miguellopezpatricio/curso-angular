import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color: string = 'red'

  private _mensaje: string = 'Mensaje por defecto'


  htmlElement: ElementRef<HTMLElement>
  @Input() set color(valor: string){

   // this.htmlElement.nativeElement.style.color = valor
    this._color = valor
    this.setColor()

  }

@Input() set mensaje(valor: string){

  // this.htmlElement.nativeElement.innerText = valor  
  this._mensaje = valor
  this.setMensaje()
}

@Input() set valido(valor: boolean){

  if(valor){
    this.htmlElement.nativeElement.classList.add('hidden')
  } else {
    this.htmlElement.nativeElement.classList.remove('hidden')

  }
}

  constructor(private elementRef: ElementRef<HTMLElement>) { 

    this.htmlElement = elementRef
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    // console.log(this.color)
    // console.log(this.mensaje)
    this.setEstilo()
    this.setColor()
    this.setMensaje()

  }

  setEstilo():void {
    this.htmlElement.nativeElement.classList.add('form-text')
  }


  setColor():void{
    this.htmlElement.nativeElement.style.color = this._color
  }

  setMensaje():void{
    this.htmlElement.nativeElement.innerText = this._mensaje
  }

}
