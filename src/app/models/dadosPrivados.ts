export interface DadosPrivados {
  cpf: number;
  rg: number;
  nome: string;
  sexo: "masculino" | "feminino";
  nis?: number;
  orgaoExpedidor: string;
  estadoExpedidor: string;
  dataDeEmissao: Date;
  nomeDaMae: string;
  nomeDoPai: string;
  nomeSocial?: string;
  dataDeNascimento: Date;
  tituloDeEleitor: number;
}
