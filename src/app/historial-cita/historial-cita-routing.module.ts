import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialCitaPage } from './historial-cita.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialCitaPageRoutingModule {}
