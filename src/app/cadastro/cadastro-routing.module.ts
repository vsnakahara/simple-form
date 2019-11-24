import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "../cadastro/cadastro.component";
import { PrimeiroPassoComponent } from './primeiro-passo/primeiro-passo.component';
import { TerceiroPassoComponent } from './terceiro-passo/terceiro-passo.component';
import { SegundoPassoComponent } from './segundo-passo/segundo-passo.component';

const routes: Routes = [
  {
    path: "",
    component: CadastroComponent,
    data: { title: "Cadastro do Candidato" },
    children: [
      {
        path: "",
        component: PrimeiroPassoComponent
      },
      {
        path: "",
        component: SegundoPassoComponent
      },
      {
        path: "",
        component: TerceiroPassoComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule {}
