import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalarzaCarrenoFormPage } from './galarza-carreno-form.page';

const routes: Routes = [
  {
    path: '',
    component: GalarzaCarrenoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalarzaCarrenoFormPageRoutingModule {}
