import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListarCandidatosComponent } from "./listar-candidatos.component";
import { VisualizarCandidatoComponent } from "./visualizar-candidato/visualizar-candidato.component";

const routes: Routes = [
  {
    path: "",
    component: ListarCandidatosComponent,
    data: { title: "Listar Candidatos" }
  },
  {
    path: "candidato/:id",
    component: VisualizarCandidatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarCandidatosRoutingModule {}
