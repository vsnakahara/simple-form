import { Component, OnInit } from "@angular/core";
import { Candidato } from "../../models/candidato";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-primeiro-passo",
  templateUrl: "./primeiro-passo.component.html",
  styleUrls: ["./primeiro-passo.component.scss"]
})
export class PrimeiroPassoComponent implements OnInit {
  candidatoForm: FormGroup;
  cadastro: Candidato;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.candidatoForm = this.fb.group({
      nome: ["", Validators.required],
      cpf: ["", [Validators.required, Validators.maxLength(14)]],
      rg: ["", Validators.required],
      nomeDaMae: ["", Validators.required],
      nomeDoPai: ["", Validators.required],
      sexo: ["", Validators.required],
      orgaoExpedidor: ["", Validators.required],
      dataDeEmissao: ["", Validators.required],
      dataDeNascimento: ["", Validators.required],
      nis: "",
      SSP: "",
      estadoExpedidor: "",
      nomeSocial: "",
      tituloDeEleitor: ""
    });
  }

  // cpfValidator(control: AbstractControl) {
  //   console.log(control)
  //   const c = control.value;
  //   console.log(c)
  //   if (c.test('"^((d{3}).(d{3}).(d{3})-(d{2}))*$"')) {
  //     return null;
  //   }
  //   return { cpfNaoValido: true};
  // }

  submit() {
    const result = this.candidatoForm.getRawValue();
    console.log(result);
    if (!result.id) {
      this.cadastrarDadosCandidato(result);
    } else {
      this.updatecadastrarDadosCandidato(result);
    }
  }

  cadastrarDadosCandidato(result) {}
  updatecadastrarDadosCandidato(result) {}
}
