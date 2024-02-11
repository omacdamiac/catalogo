import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SebastianRoutingModule } from './sebastian-routing.module';
import { SebastianComponent } from './sebastian.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SebastianComponent
  ], 
  exports: [
    SebastianComponent
  ],
  imports: [
    CommonModule,
    SebastianRoutingModule,
    RouterModule
  ]
})
export class SebastianModule { }
