import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoComponentLifecycleRoutingModule } from './two-component-lifecycle-routing.module';
import { TwoComponentLifecycleComponent } from './two-component-lifecycle.component';


@NgModule({
  declarations: [
    TwoComponentLifecycleComponent
  ],
  imports: [
    CommonModule,
    TwoComponentLifecycleRoutingModule
  ]
})
export class TwoComponentLifecycleModule { }
