import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleOneComponent } from './example-one/example-one.component';

const routes: Routes = [
  { path: 'example-one', component: ExampleOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
