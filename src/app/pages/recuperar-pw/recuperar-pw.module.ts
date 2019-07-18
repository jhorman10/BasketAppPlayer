import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecuperarPwPage } from './recuperar-pw.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarPwPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecuperarPwPage]
})
export class RecuperarPwPageModule {}
