import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeViewEncapsulationRoutingModule } from './three-view-encapsulation-routing.module';
import { ThreeViewEncapsulationComponent } from './three-view-encapsulation.component';


@NgModule({
  declarations: [
    ThreeViewEncapsulationComponent
  ],
  imports: [
    CommonModule,
    ThreeViewEncapsulationRoutingModule
  ]
})
export class ThreeViewEncapsulationModule { }
