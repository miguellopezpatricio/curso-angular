import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles:[
    `
  #mapa{ 
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    width: 100vw;
  }
    `
  ]
})
export class FullScreenComponent implements OnInit {


  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-8.66149407728201, 42.31345545371591 ],
      zoom:10
    });


  }



}
