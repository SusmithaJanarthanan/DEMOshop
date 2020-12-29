import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './property/home/home.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const routes: Routes = [
  {path: 'list', component:PropertyListComponent },
  {path: '', component:HomeComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
