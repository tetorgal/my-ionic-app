import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalarzaCarrenoFormPageRoutingModule } from './galarza-carreno-form-routing.module';

import { GalarzaCarrenoFormPage } from './galarza-carreno-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalarzaCarrenoFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GalarzaCarrenoFormPage]
})
export class GalarzaCarrenoFormPageModule {}
