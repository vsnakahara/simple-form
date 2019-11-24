import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListarCandidatosComponent } from "./listar-candidatos.component";

const routes: Routes = [{ path: "", component: ListarCandidatosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarCandidatosRoutingModule {}
