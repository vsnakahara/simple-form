import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Candidato } from "../../models/candidato";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { CandidatoService } from "../../services/candidato.service";
import { DadosPublicos } from '../../models/dadosPublicos';

@Component({
  selector: "app-segundo-passo",
  templateUrl: "./segundo-passo.component.html",
  styleUrls: ["./segundo-passo.component.scss"]
})
export class SegundoPassoComponent implements OnInit {
  candidatoForm: FormGroup;
  @Input() candidato: Candidato;
  @Output() candidatoCriado = new EventEmitter<Candidato>();

  constructor(
    private fb: FormBuilder,
    private candidatoService: CandidatoService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.candidatoForm = this.fb.group({
      estadoCivil: ["", Validators.required],
      sabatista: false,
      grauDeEscolaridade: ["", Validators.required],
      quantidadeDeFilhos: ["", Validators.required],
      endereco: this.fb.group({
        cep: ["", Validators.required],
        rua: ["", Validators.required],
        numero: ["", Validators.required],
        bairro: ["", Validators.required],
        cidade: ["", Validators.required],
        estado: ["", Validators.required],
        complemento: ""
      }),
      contato: this.fb.group({
        email: ["", Validators.required],
        telefone: "",
        celular: ["", Validators.required]
      })
    });
  }

  get formContato(): FormGroup {
    return this.candidatoForm.get("contato") as FormGroup;
  }

  get formEndereco(): FormGroup {
    return this.candidatoForm.get("endereco") as FormGroup;
  }

  submit() {
    const dados: DadosPublicos = this.candidatoForm.getRawValue();
    console.log(dados)
    this.candidato.dadosPublicos = dados;
    if (this.candidato.id) {
      this.atualizarDadosCandidato(this.candidato);
    }
  }

  atualizarDadosCandidato(candidato: Candidato) {
    this.candidatoService
      .salvarDadosPrivadosCandidato(candidato)
      .subscribe(response => {
        const novoCandidato = response;
        this.candidatoCriado.emit(novoCandidato);
      });
  }
}
