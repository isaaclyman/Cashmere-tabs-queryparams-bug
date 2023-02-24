import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleContainerComponent } from './example-container.component';
import { Child1Component } from './child-1.component';
import { Child2Component } from './child-2.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleContainerComponent,
    children: [
      {
        path: 'child-1',
        component: Child1Component,
      },
      {
        path: 'child-2',
        component: Child2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
