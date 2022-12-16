import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apiKey = 'C2Cbwee3PeSOeubYUaYtXPvczJDsHeIS'
  private servicioUrl = 'https://api.giphy.com/v1/gifs'
  private _historial:string[]=[]

  public resultados:Gif[] = []


  constructor(private http:HttpClient) {

    // EQUIVALENTE PERO EN 1 SOLA LINEA
    // this._historial = JSON.parse(localStorage.getItem('historial')!) || []

    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!)
      this.resultados = JSON.parse(localStorage.getItem('resultados')!)

    }
  }

  get historial(){
    return [...this._historial]
  }

  buscarGifs(query:string){

    query = query.toLowerCase()

    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10)
      localStorage.setItem('historial',JSON.stringify(this._historial))
    }


   // console.log(this._historial)

   const params = new HttpParams()
          .set('api_key',this.apiKey)
          .set('limit',10)
          .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params:params})
    .subscribe((resp )=>{
      console.log(resp.data)
      this.resultados = resp.data
      localStorage.setItem('resultados',JSON.stringify(this.resultados))
    })
  }

}
