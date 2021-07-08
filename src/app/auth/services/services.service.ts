import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  iniciarSesion(array: any,nombre: string): boolean{
    if(nombre.toUpperCase() === "JUAN"){
        if(this.valoresDelArray(array)){
          return true;
        }
    }
    
    return false;
  }

  valoresDelArray(array: any): boolean{
    let contador=0;
    console.log(array);
    for(let i=0;i<array.length; i++){
      if(array[i] === "perro" || array[i] === "gato" || array[i] === "cuervo" ){
        contador++;
      }
    }
    if(contador == 3){
       return true;
    }
    return false;
  }
}
