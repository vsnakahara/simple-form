import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/components/common/menuitem";
import { Candidato } from "../models/candidato";

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
      { label: "Identificação" },
      { label: "Conferência" },
      { label: "Confirmação" }
    ];
  }

  set formActiveIndex(value: number) {
    this.activeIndex = value;
  }

  preencherDadosPrivadosCandidato(candidato: Candidato) {
    const old = this.candidato;
    this.candidato = {
      ...old,
      id: candidato.id,
      dadosPrivados: candidato.dadosPrivados
    };
    this.formActiveIndex = 1;
  }

  preencherDadosPublicosCandidato(candidato: Candidato) {
    const old = this.candidato;
    this.candidato = {
      ...old,
      id: candidato.id,
      dadosPublicos: candidato.dadosPublicos
    };
    this.formActiveIndex = 2;
  }

  preencherImagemCandidato(candidato: Candidato) {
    const old = this.candidato;
    this.candidato = {
      ...old,
      thumbnail: candidato.thumbnail,
      isFormularioCompleto: true
    };
    this.formActiveIndex = 3;
  }

  concluirForm() {
    this.formActiveIndex = 4;
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
        nis: null,
        estadoExpedidor: "PR",
        nomeSocial: null,
        tituloDeEleitor: null
      },
      dadosPublicos: {
        estadoCivil: "solteiro",
        sabatista: false,
        grauDeEscolaridade: "ensino_fundamentao_incompleto",
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
