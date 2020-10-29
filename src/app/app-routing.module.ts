import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsPageComponent } from './pages/animals-page/animals-page.component';
import { SpeciesPageComponent } from './pages/species-page/species-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'animals', component: AnimalsPageComponent },
  { path: 'species', component: SpeciesPageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
