import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IncluiComponent}from './cliente/inclui/inclui.component';


const routes: Routes = [
{path:"novo",component: IncluiComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
