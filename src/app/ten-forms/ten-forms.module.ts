import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenFormsRoutingModule } from './ten-forms-routing.module';
import { TenFormsComponent } from './ten-forms.component';


@NgModule({
  declarations: [
    TenFormsComponent
  ],
  imports: [
    CommonModule,
    TenFormsRoutingModule
  ]
})
export class TenFormsModule { }
