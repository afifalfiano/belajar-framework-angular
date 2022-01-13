import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'one-component', loadChildren: () => import('./one-component/one-component.module').then(m => m.OneComponentModule) },
  { path: 'two-component-lifecycle', loadChildren: () => import('./two-component-lifecycle/two-component-lifecycle.module').then(m => m.TwoComponentLifecycleModule) },
  { path: 'three-view-encapsulation', loadChildren: () => import('./three-view-encapsulation/three-view-encapsulation.module').then(m => m.ThreeViewEncapsulationModule) },
  { path: 'four-component-interaction', loadChildren: () => import('./four-component-interaction/four-component-interaction.module').then(m => m.FourComponentInteractionModule) },
  { path: 'five-component-styles', loadChildren: () => import('./five-component-styles/five-component-styles.module').then(m => m.FiveComponentStylesModule) },
  { path: 'six-templates', loadChildren: () => import('./six-templates/six-templates.module').then(m => m.SixTemplatesModule) },
  { path: 'seven-directive', loadChildren: () => import('./seven-directive/seven-directive.module').then(m => m.SevenDirectiveModule) },
  { path: 'eight-DI', loadChildren: () => import('./eight-di/eight-di.module').then(m => m.EightDIModule) },
  { path: 'nine-routing-navigation', loadChildren: () => import('./nine-routing-navigation/nine-routing-navigation.module').then(m => m.NineRoutingNavigationModule) },
  { path: 'ten-forms', loadChildren: () => import('./ten-forms/ten-forms.module').then(m => m.TenFormsModule) },
  { path: 'eleven-http', loadChildren: () => import('./eleven-http/eleven-http.module').then(m => m.ElevenHttpModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
