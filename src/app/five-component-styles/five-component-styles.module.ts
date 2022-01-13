import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiveComponentStylesRoutingModule } from './five-component-styles-routing.module';
import { FiveComponentStylesComponent } from './five-component-styles.component';


@NgModule({
  declarations: [
    FiveComponentStylesComponent
  ],
  imports: [
    CommonModule,
    FiveComponentStylesRoutingModule
  ]
})
export class FiveComponentStylesModule { }
