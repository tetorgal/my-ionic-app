import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalarzaCarrenoTablaPage } from './galarza-carreno-tabla.page';

const routes: Routes = [
  {
    path: '',
    component: GalarzaCarrenoTablaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalarzaCarrenoTablaPageRoutingModule {}
