import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'
import { map } from 'rxjs';


interface MarcadorColor{
  color: string

  // opcionales
  marker?: mapboxgl.Marker
  centro?: [number, number]
}


@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles:[
      `
      .mapa-container{ 
          position: fixed;
          top: 0px;
          right: 0px;
          height: 100vh;
          width: 100vw;
    }

    .list-group{
      position:fixed;
      top:20px;
      right:20px;
      z-index:999;
    }

    li{
      cursor:pointer;
    }
    `
    ]
})


export class MarcadoresComponent implements AfterViewInit{

  @ViewChild('mapa') divMapa!: ElementRef
  mapa!: mapboxgl.Map
  zoomLevel: number = 10
  center: [number,number] = [-8.66149407728201, 42.31345545371591]

  // Array de marcadores
  marcadores: MarcadorColor[]=[]


  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.center,
      zoom: this.zoomLevel
    });

    this.leerLocalStorage()

    // const markerHtml: HTMLElement = document.createElement('div')
    // markerHtml.innerHTML = 'ESTÁS AQUÍ'

    // const marker = new mapboxgl.Marker({
    //   element:markerHtml
    // })
    // .setLngLat(this.center)
    // .addTo(this.mapa)
  }


  irMarcador(marker: mapboxgl.Marker){
    this.mapa.flyTo({
      center: marker.getLngLat()
    })
  }

  agregarMarcador(){

    // genera un color aleatorio
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color: color
    })
    .setLngLat(this.center)
    .addTo(this.mapa)

    this.marcadores.push({
      color, 
      marker: nuevoMarcador
    })

    this.guardarMarcadorLocalStorage()

        // listener cuando se deja de arrastrar un marcador en el mapa
        nuevoMarcador.on('dragend',()=>{
          this.guardarMarcadorLocalStorage()
        })

  }

  guardarMarcadorLocalStorage(){

    const lngLatArr: MarcadorColor[] = []

    this.marcadores.forEach(m => {

      const color = m.color
      const {lng,lat} = m.marker!.getLngLat()

      lngLatArr.push({
        color: color,
        centro: [lng, lat]
      })

    })

    // Almacenando el marcador en localstorage para no perderlo al cambiar de componente
    localStorage.setItem('marcadores', JSON.stringify(lngLatArr))
  }

  leerLocalStorage(){

    if(!localStorage.getItem('marcadores')){
      return
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!)

    lngLatArr.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
      .setLngLat(m.centro!)
      .addTo(this.mapa)

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      })


      // listener cuando se deja de arrastrar un marcador en el mapa
      newMarker.on('dragend',()=>{
        this.guardarMarcadorLocalStorage()
      })

    })

  }


  borrarMarcador(i:number){
    // eliminamos el marcador en el mapa
    this.marcadores[i].marker?.remove()

    // eliminamos el marcador del arreglo de marcadores en el localstorage
    this.marcadores.splice(i,1)
    this.guardarMarcadorLocalStorage()
  }
}

