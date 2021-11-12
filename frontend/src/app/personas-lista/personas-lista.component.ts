import { MinimoServices } from './../services/minimo.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/interfaces/persona';

@Component({
  selector: 'app-personas-lista',
  templateUrl: './personas-lista.component.html',
  styleUrls: ['./personas-lista.component.css']
})
export class PersonasListaComponent implements OnInit {
  personas : Persona[]= []; 
  constructor( private service: MinimoServices) { }

  ngOnInit(): void {
    this.getPersonas(); 
  }

  getPersonas(){
    this.service.getPersonas().subscribe((response : [Persona]) => {
      this.personas = response; 
    })
  }

}
