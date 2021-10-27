import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  mi_lista:string[]=[];
  mi_lista_subject=new Subject<string[]>();
 
  constructor() {}

  add_to_mi_lista(producto:string){
      //ingresamos un nuevo producto añadido por el cliente
      this.mi_lista.push(producto);
      //le notifico a traves del el metodo next los nuevos cambios en la lista
      this.mi_lista_subject.next(this.mi_lista);
  }
  
  ReturnMi_lista_subject():Observable<string[]>{
    return this.mi_lista_subject;
  }

}
