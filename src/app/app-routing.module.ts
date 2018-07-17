import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BumpInfoComponent } from './components/bump-info/bump-info.component';

const routes: Routes = [
  { path: 'bump-info', component: BumpInfoComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
