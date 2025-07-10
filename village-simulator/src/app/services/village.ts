import { Injectable } from '@angular/core';
import { Improvement } from '../interfaces/improvement';

@Injectable({
  providedIn: 'root'
})
export class Village {

  

  public listOfImprovements : Improvement[] = []

  constructor()
   {
    this.listOfImprovements.push({improvementLabel: "House", people: 1, grain: 20, sheep: 1, lumber: 2, water: 6})
    this.listOfImprovements.push({improvementLabel: "Field", people: 3, grain: 15, sheep: 5, lumber: 1, water: 3})
    this.listOfImprovements.push({improvementLabel: "Pasture", people: 7, grain: 13, sheep: 4, lumber: 3, water: 3})
    this.listOfImprovements.push({improvementLabel: "Lumber Mill",people: 2, grain: 12, sheep: 4, lumber: 5, water: 1})
    this.listOfImprovements.push({improvementLabel: "Well",people: 1, grain: 19, sheep: 6, lumber: 1, water: 8})
  }
  addImprovement(improvement: Improvement) : void
  {
this.listOfImprovements.push(improvement)
  }

  removeImprovement(index: number) : void
  {
this.listOfImprovements.splice(index, 1)
  }

  upgradeImprovement(index: number) : void
  {
    this.listOfImprovements[index].people++
    this.listOfImprovements[index].grain++
    this.listOfImprovements[index].sheep++
    this.listOfImprovements[index].lumber++
    this.listOfImprovements[index].water++
  }

  downgradeImprovement(index: number) : void
  {
    this.listOfImprovements[index].people--
    this.listOfImprovements[index].grain--
    this.listOfImprovements[index].sheep--
    this.listOfImprovements[index].lumber--
    this.listOfImprovements[index].water--
  }
}

