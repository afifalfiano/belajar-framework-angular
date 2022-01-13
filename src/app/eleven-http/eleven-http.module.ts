import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElevenHttpRoutingModule } from './eleven-http-routing.module';
import { ElevenHttpComponent } from './eleven-http.component';


@NgModule({
  declarations: [
    ElevenHttpComponent
  ],
  imports: [
    CommonModule,
    ElevenHttpRoutingModule
  ]
})
export class ElevenHttpModule { }
