import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {

  longitud_lista:any;
  constructor(private rest:RestService) { }
  ngOnInit(): void {
      this.rest.Return_lista_subject().subscribe(lista=>{
        this.longitud_lista=lista.length;
      });
      if(this.rest.que_es==='productos'){
        this.longitud_lista=this.rest.productos_en_el_carrito.length;
      }
  }

}
