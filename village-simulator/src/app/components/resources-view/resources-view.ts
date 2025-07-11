import { Component } from '@angular/core';
import { Village } from '../../services/village';
import { Improvement } from '../../interfaces/improvement';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-resources-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resources-view.html',
  styleUrl: './resources-view.css'
})
export class ResourcesView {
   newVillage : Village = new Village();
    listOfImprovements : any[] = this.newVillage.listOfImprovements
    public improvement: any = {label: "People"} 
    improvements: any[] = []
    newTotals : any[] = [
      {
        label: "People",
        total: 0
      },
      {
        label: "Grain",
        total: 0
      },
      {
        label: "Sheep",
        total: 0
      },
      {
        label: "Lumber",
        total: 0
      },
      {
        label: "Water",
        total: 0
      }
    ];
    constructor() {
      this.Settotals()
      console.log(this.newTotals)
    }



    Settotals(): void  {
      for (let i = 0; i < this.newTotals.length; i++){
        for (let j = 0; j < this.listOfImprovements.length; j++){
          if(this.newTotals[i].label === "People") {
            this.newTotals[i].total += this.listOfImprovements[j].people     
      }
      if(this.newTotals[i].label === "Grain") {
            this.newTotals[i].total += this.listOfImprovements[j].grain    
      }
      if(this.newTotals[i].label === "Sheep") {
            this.newTotals[i].total += this.listOfImprovements[j].sheep     
      }
      if(this.newTotals[i].label === "Lumber") {
            this.newTotals[i].total += this.listOfImprovements[j].lumber     
      }
      if(this.newTotals[i].label ==="Water") {
            this.newTotals[i].total += this.listOfImprovements[j].water     
    }
    }


    
    }
    }
    addImprovementModal() {
      // this.open(AddImprovementModal)
      console.log("OPEN NOWWW")
    }

    addImprovement(i: any) {
        this.improvements.push(JSON.parse(JSON.stringify(i)))
        console.log(this.improvements)
    }
  }




