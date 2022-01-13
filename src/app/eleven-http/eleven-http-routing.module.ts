import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElevenHttpComponent } from './eleven-http.component';

const routes: Routes = [{ path: '', component: ElevenHttpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElevenHttpRoutingModule { }
