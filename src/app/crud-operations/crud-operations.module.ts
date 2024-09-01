import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudOperationsPageRoutingModule } from './crud-operations-routing.module';

import { CrudOperationsPage } from './crud-operations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudOperationsPageRoutingModule
  ],
  declarations: [CrudOperationsPage]
})
export class CrudOperationsPageModule {}
