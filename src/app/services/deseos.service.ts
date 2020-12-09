import { Injectable } from '@angular/core';
import {Lista} from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[]=[];
  
  constructor() { 

  // console.log('Servicio inicializado');
  this.cargarStorage();
  
  // const lista1=new Lista('recolectar herramientas del infinito');
  // const lista2=new Lista('heroe a desaparecer');

  // this.listas.push(lista1,lista2);

  console.log(this.listas);

}


crearLista(titulo:string){
    const nuevaLista=new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
}


obtenerLista(id:string|number){

          id=Number(id);
          // this.listas.find(listaData=>{
          //   return listaData.id===id;
          // });

          return this.listas.find(listaData=>listaData.id===id);
}


guardarStorage(){

    localStorage.setItem('data',JSON.stringify(this.listas));
}




cargarStorage(){
     if(localStorage.getItem('data')){
             this.listas=JSON.parse(localStorage.getItem('data'));
     }
     else{
     	this.listas=[];
     }
}


borrarLista(lista:Lista){
  this.listas=this.listas.filter(listaData=>{
    return listaData.id!==lista.id;
    this.guardarStorage();
  });

}

editarLista(){
  
}
}