import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormComponent } from './components/demo-form/demo-form.component';

const routes: Routes = [
  { path: 'form', component: DemoFormComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
