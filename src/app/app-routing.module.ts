import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: "cadastro",
    loadChildren: "./cadastro/cadastro.module#CadastroModule"
  },
  {
    path: "listar-candidatos",
    loadChildren: "./listar-candidatos/listar-candidatos.module#ListarCandidatosModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
