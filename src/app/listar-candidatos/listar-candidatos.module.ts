import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarCandidatosRoutingModule } from './listar-candidatos-routing.module';
import { CandidatoService } from '../services/candidato.service';
import { ListarCandidatosComponent } from './listar-candidatos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListarCandidatosComponent],
  imports: [
    CommonModule,
    ListarCandidatosRoutingModule,
    HttpClientModule
    
  ],
  providers: [CandidatoService]
})
export class ListarCandidatosModule { }
