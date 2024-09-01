import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalarzaCarrenoTablaPageRoutingModule } from './galarza-carreno-tabla-routing.module';

import { GalarzaCarrenoTablaPage } from './galarza-carreno-tabla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalarzaCarrenoTablaPageRoutingModule
  ],
  declarations: [GalarzaCarrenoTablaPage]
})
export class GalarzaCarrenoTablaPageModule {}
