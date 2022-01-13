import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SevenDirectiveComponent } from './seven-directive.component';

const routes: Routes = [{ path: '', component: SevenDirectiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SevenDirectiveRoutingModule { }
