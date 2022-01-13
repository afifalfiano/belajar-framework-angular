import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NineRoutingNavigationRoutingModule } from './nine-routing-navigation-routing.module';
import { NineRoutingNavigationComponent } from './nine-routing-navigation.component';


@NgModule({
  declarations: [
    NineRoutingNavigationComponent
  ],
  imports: [
    CommonModule,
    NineRoutingNavigationRoutingModule
  ]
})
export class NineRoutingNavigationModule { }
