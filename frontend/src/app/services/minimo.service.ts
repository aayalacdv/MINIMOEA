import { Persona } from './../../interfaces/persona';
import { Seguimiento } from 'src/interfaces/seguimiento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable(
    {
        providedIn: 'root',
    }
)
export class MinimoServices{
  BASE_URL: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

    getPersonas() {
        return this.http.get<[Persona]>(`${this.BASE_URL}/persona`); 
    }
}

    