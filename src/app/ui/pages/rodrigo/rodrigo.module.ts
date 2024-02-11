import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RodrigoRoutingModule } from './rodrigo-routing.module';
import { RodrigoComponent } from './rodrigo.component';


@NgModule({
  declarations: [
    RodrigoComponent
  ],  
  exports: [
    RodrigoComponent
  ],
  imports: [
    CommonModule,
    RodrigoRoutingModule
  ]
})
export class RodrigoModule { }
