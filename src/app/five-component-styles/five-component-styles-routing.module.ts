import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveComponentStylesComponent } from './five-component-styles.component';

const routes: Routes = [{ path: '', component: FiveComponentStylesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiveComponentStylesRoutingModule { }
