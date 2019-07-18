import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscarEquipoPage } from './buscar-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarEquipoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscarEquipoPage]
})
export class BuscarEquipoPageModule {}
