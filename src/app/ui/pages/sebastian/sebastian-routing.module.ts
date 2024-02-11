import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SebastianComponent } from './sebastian.component';

const routes: Routes = [
  {path: '', component: SebastianComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SebastianRoutingModule { }
