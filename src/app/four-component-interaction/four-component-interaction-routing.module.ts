import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourComponentInteractionComponent } from './four-component-interaction.component';

const routes: Routes = [{ path: '', component: FourComponentInteractionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourComponentInteractionRoutingModule { }
