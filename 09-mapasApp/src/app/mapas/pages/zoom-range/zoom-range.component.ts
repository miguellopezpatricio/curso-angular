import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';



@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
  .mapa-container{ 
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    width: 100vw;
  }
  .row{
    background-color: white;
    position:fixed;
    bottom: 50px;
    left: 50px;
    padding: 10px;
    border-radius: 5px;
    z-index: 999;
    width: 400px;
    }
    `
  ]
})

export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef
  mapa!: mapboxgl.Map
  zoomLevel: number = 10
  center: [number,number] = [-8.66149407728201, 42.31345545371591]


  constructor(){}

  // destrucción de instancias
  ngOnDestroy(): void {
    this.mapa.off('zoom',()=>{})
    this.mapa.off('zoomend',()=>{})
    this.mapa.off('move',()=>{})
  }


    ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.center,
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', (ev)=>{
      this.zoomLevel = this.mapa.getZoom()

    })

    this.mapa.on('zoomend', (ev)=>{
      if(this.mapa.getZoom() > 15){
        this.mapa.zoomTo(15)
      }

    })

    // conocer el movimiento del mapa
    this.mapa.on('move', (event)=>{
      const target = event.target
      const {lng, lat} = target.getCenter()
      this.center = [lng, lat]
    })

  }
  

  zoomOut(){

     this.mapa.zoomOut()


  }

  zoomIn(){
    this.mapa.zoomIn()


  }

  zoomCambio(valor: string){
    this.mapa.zoomTo(Number(valor))
  }

    
}
