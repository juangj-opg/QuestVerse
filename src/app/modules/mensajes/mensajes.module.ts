import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensajesRoutingModule } from './mensajes-routing.module';
import { PrivadoComponent } from './privado/privado.component';
import { GrupalComponent } from './grupal/grupal.component';
import { ConversacionesComponent } from './conversaciones/conversaciones.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PrivadoComponent, GrupalComponent, ConversacionesComponent],
  imports: [CommonModule, MensajesRoutingModule, SharedModule],
})
export class MensajesModule {}
