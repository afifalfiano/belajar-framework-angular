import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponentLifecycleComponent } from './two-component-lifecycle.component';

const routes: Routes = [{ path: '', component: TwoComponentLifecycleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoComponentLifecycleRoutingModule { }
