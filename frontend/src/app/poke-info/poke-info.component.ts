import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {
  name : string = ''; 
  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') || ''; 
    

  }

}
