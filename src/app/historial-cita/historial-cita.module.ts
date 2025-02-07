import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialCitaPageRoutingModule } from './historial-cita-routing.module';

import { HistorialCitaPage } from './historial-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialCitaPageRoutingModule
  ],
  declarations: [HistorialCitaPage]
})
export class HistorialCitaPageModule {}
