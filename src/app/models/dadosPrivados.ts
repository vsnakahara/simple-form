export interface DadosPrivados {
  nome: string;
  nomeSocial?: string;
  dataDeNascimento: string;
  sexo: "masculino" | "feminino";
  cpf: string;
  rg: string;
  orgaoExpedidor: string;
  estadoExpedidor?: string;
  dataDeEmissao: string;
  nis?: string;
  nomeDaMae: string;
  nomeDoPai: string;
  tituloDeEleitor?: string;
}
