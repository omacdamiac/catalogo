import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboradRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RodrigoModule, SebastianModule } from '../../pages';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboradRoutingModule,
    RodrigoModule,
    SebastianModule,
  ]
})
export class DashboradModule { }
