import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RodrigoComponent } from './rodrigo.component';

const routes: Routes = [
  {path: '', component: RodrigoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RodrigoRoutingModule { }
