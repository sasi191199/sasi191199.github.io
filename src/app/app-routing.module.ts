import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { GreatwallofchinaComponent } from './greatwallofchina/greatwallofchina.component';
const routes: Routes = [
  {path:'tajmahal',component:TajmahalComponent},
  {path:'greatwall',component:GreatwallofchinaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
