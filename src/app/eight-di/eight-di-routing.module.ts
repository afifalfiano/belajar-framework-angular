import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EightDIComponent } from './eight-di.component';

const routes: Routes = [{ path: '', component: EightDIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EightDIRoutingModule { }
