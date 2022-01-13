import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SevenDirectiveRoutingModule } from './seven-directive-routing.module';
import { SevenDirectiveComponent } from './seven-directive.component';


@NgModule({
  declarations: [
    SevenDirectiveComponent
  ],
  imports: [
    CommonModule,
    SevenDirectiveRoutingModule
  ]
})
export class SevenDirectiveModule { }
