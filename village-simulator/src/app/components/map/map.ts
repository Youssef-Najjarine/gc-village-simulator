import { CommonModule }   from '@angular/common';
import { Component } from '@angular/core';
import { Village } from '../../services/village';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map {
  newVillage : Village = new Village();
  listOfImprovements : any[] = this.newVillage.listOfImprovements
}
