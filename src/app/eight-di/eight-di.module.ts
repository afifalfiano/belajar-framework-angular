import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EightDIRoutingModule } from './eight-di-routing.module';
import { EightDIComponent } from './eight-di.component';


@NgModule({
  declarations: [
    EightDIComponent
  ],
  imports: [
    CommonModule,
    EightDIRoutingModule
  ]
})
export class EightDIModule { }
