import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixTemplatesComponent } from './six-templates.component';

const routes: Routes = [{ path: '', component: SixTemplatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SixTemplatesRoutingModule { }
