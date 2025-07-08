import { Routes } from '@angular/router';
import { Map } from './components/map/map';
import { ResourcesView } from './components/resources-view/resources-view';
export const routes: Routes = [
    {path: '', redirectTo: '/map', pathMatch: 'full' },
    {path: 'map',component: Map},
    {path: 'resourcesView',component: ResourcesView} 
];
