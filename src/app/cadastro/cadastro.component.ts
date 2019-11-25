import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/components/common/menuitem";
import { Candidato } from '../models/candidato';

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"]
})
export class CadastroComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 0;

  candidato: Candidato;

  constructor() {}

  ngOnInit() {
    this.candidato = this.inicializarCandidato();
    this.items = [
      { label: "Dados Básicos" },
      { label: "Dados Complementares" },
      { label: "Dados para contato" },
      { label: "Confirmação" }
    ];
  }

  patchCandidato(candidato: Candidato) {
    this.candidato.id = candidato.id;
    this.candidato.dadosPrivados = candidato.dadosPrivados;
  }

  inicializarCandidato(): Candidato {
    return {
      id: null,
      dadosPrivados: {
        nome: "Teste",
        cpf: "10100100101",
        rg: "200000000",
        nomeDaMae: "Nome da mãe",
        nomeDoPai: "Nome do pai",
        sexo: "masculino",
        orgaoExpedidor: "SSP",
        dataDeEmissao: "01-01-1990",
        dataDeNascimento: "01-01-1994",
        nis: "123123",
        estadoExpedidor: "PR",
        nomeSocial: "",
        tituloDeEleitor: "09876"
      },
      dadosPublicos: {
        estadoCivil: "solteiro",
        sabatista: false,
        grauDeEscolaridade: 'ensino_fundamentao_incompleto',
        quantidadeDeFilhos: 0,
        endereco: {
          cep: "10000-000",
          rua: "Rua Exemplo",
          numero: 10,
          bairro: "Zona 07",
          cidade: "Maringá",
          estado: "Paraná",
          complemento: ""
        },
        contato: {
          email: "teste@gmail.com",
          telefone: "29900-0000",
          celular: "99900-0000"
        }
      },
      isFormularioCompleto: false
    };
  }
}
