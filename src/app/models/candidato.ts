import { DadosPrivados } from "./dadosPrivados";
import { DadosPublicos } from "./dadosPublicos";

export interface Candidato {
  id?: number;
  dadosPrivados: DadosPrivados;
  dadosPublicos: DadosPublicos;
  isFormularioCompleto?: boolean;
}
