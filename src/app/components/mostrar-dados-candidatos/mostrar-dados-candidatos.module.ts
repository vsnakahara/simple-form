import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MostrarDadosCandidatosComponent } from "./mostrar-dados-candidatos.component";
import { FormatLabelPipe } from "./formatLabel.pipe";

@NgModule({
  declarations: [MostrarDadosCandidatosComponent, FormatLabelPipe],
  imports: [CommonModule],
  exports: [MostrarDadosCandidatosComponent]
})
export class MostrarDadosCandidatosModule {}
