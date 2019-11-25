import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarCandidatosRoutingModule } from './listar-candidatos-routing.module';
import { CandidatoService } from '../services/candidato.service';
import { ListarCandidatosComponent } from './listar-candidatos.component';
import { HttpClientModule } from '@angular/common/http';
import { VisualizarCandidatoComponent } from './visualizar-candidato/visualizar-candidato.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListarCandidatosComponent, VisualizarCandidatoComponent],
  imports: [
    CommonModule,
    ListarCandidatosRoutingModule,
    HttpClientModule,
    RouterModule.forChild([])
  ],
  providers: [CandidatoService]
})
export class ListarCandidatosModule { }
