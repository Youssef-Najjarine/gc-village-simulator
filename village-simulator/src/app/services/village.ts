import { Injectable } from '@angular/core';
import { Improvement } from '../interfaces/improvement';

@Injectable({
  providedIn: 'root'
})
export class Village {

  

  private listOfImprovements : Improvement[] = []

  constructor()
   {
    this.listOfImprovements.push({people: 1, grain: 20, sheep: 1, lumber: 2, water: 6})
    this.listOfImprovements.push({people: 3, grain: 15, sheep: 5, lumber: 1, water: 3})
    this.listOfImprovements.push({people: 7, grain: 13, sheep: 4, lumber: 3, water: 3})
    this.listOfImprovements.push({people: 2, grain: 12, sheep: 4, lumber: 5, water: 1})
    this.listOfImprovements.push({people: 1, grain: 19, sheep: 6, lumber: 1, water: 8})


    }
  
}

