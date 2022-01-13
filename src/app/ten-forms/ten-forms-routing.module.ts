import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenFormsComponent } from './ten-forms.component';

const routes: Routes = [{ path: '', component: TenFormsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenFormsRoutingModule { }
