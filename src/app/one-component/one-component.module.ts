import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneComponentRoutingModule } from './one-component-routing.module';
import { OneComponentComponent } from './one-component.component';


@NgModule({
  declarations: [
    OneComponentComponent
  ],
  imports: [
    CommonModule,
    OneComponentRoutingModule
  ]
})
export class OneComponentModule { }
