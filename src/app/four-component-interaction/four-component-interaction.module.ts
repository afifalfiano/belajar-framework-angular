import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourComponentInteractionRoutingModule } from './four-component-interaction-routing.module';
import { FourComponentInteractionComponent } from './four-component-interaction.component';


@NgModule({
  declarations: [
    FourComponentInteractionComponent
  ],
  imports: [
    CommonModule,
    FourComponentInteractionRoutingModule
  ]
})
export class FourComponentInteractionModule { }
