import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { ConversacionesComponent } from './conversaciones/conversaciones.component';
import { PrivadoComponent } from './privado/privado.component';
import { GrupalComponent } from './grupal/grupal.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ConversacionesComponent },
      {
        path: 'privado',
        component: PrivadoComponent,
      },
      {
        path: 'grupal',
        component: GrupalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesRoutingModule {}
