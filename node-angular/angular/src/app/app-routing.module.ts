import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addemployee/addemployee.component';
import { GetproductComponent } from './getemployee/getemployee.component';
import { EditproductComponent } from './editemployee/editemployee.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

const routes: Routes = [
  {
    path: 'product/create',
    component: AddproductComponent
  },
  {
    path: 'product/edit/:id',
    component: EditproductComponent
  },
  {
    path: 'product',
    component: GetproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SlimLoadingBarModule],

  exports: [RouterModule]
})

export class AppRoutingModule { }