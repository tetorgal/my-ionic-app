import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudOperationsPage } from './crud-operations.page';

const routes: Routes = [
  {
    path: '',
    component: CrudOperationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudOperationsPageRoutingModule {}
