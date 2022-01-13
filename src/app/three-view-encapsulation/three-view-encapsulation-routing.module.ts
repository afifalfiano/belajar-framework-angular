import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeViewEncapsulationComponent } from './three-view-encapsulation.component';

const routes: Routes = [{ path: '', component: ThreeViewEncapsulationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeViewEncapsulationRoutingModule { }
