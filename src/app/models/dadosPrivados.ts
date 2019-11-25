export interface DadosPrivados {
  cpf: string;
  rg: string;
  nome: string;
  sexo: "masculino" | "feminino";
  orgaoExpedidor: string;
  estadoExpedidor: string;
  dataDeEmissao: string;
  nomeDaMae: string;
  nomeDoPai: string;
  dataDeNascimento: string;
  tituloDeEleitor?: string;
  nis?: string;
  nomeSocial?: string;
}
