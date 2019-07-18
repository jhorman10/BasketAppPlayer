import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscarTorneoPage } from './buscar-torneo.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarTorneoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscarTorneoPage]
})
export class BuscarTorneoPageModule {}
