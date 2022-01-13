import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SixTemplatesRoutingModule } from './six-templates-routing.module';
import { SixTemplatesComponent } from './six-templates.component';


@NgModule({
  declarations: [
    SixTemplatesComponent
  ],
  imports: [
    CommonModule,
    SixTemplatesRoutingModule
  ]
})
export class SixTemplatesModule { }
