import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-primeiro-passo",
  templateUrl: "./primeiro-passo.component.html",
  styleUrls: ["./primeiro-passo.component.scss"]
})
export class PrimeiroPassoComponent implements OnInit {
  candidatoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    
  }

  buildForm() {
    // if (this.premise) {
    //   this.candidatoForm = this.fb.group(this.premise);
    //   this.initializeStyles();
    // } else {
    this.candidatoForm = this.fb.group({
      nome: ["", Validators.required],
      cpf: [null, Validators.required],
      rg: [null],
      sexo: "",
      nis: "",
      SSP: "",
      estadoExpedidor: "",
      dataDeEmissao: "",
      nomeDaMae: "",
      nomeDoPai: "",
      nomeSocial: "",
      dataDeNascimento: "",
      tituloDeEleitor: ""
    });
    // }
  }

  // private updateForm() {
  //   if (!this.candidatoForm) {
  //     return;
  //   }
  //   if (this.premise) {
  //     this.candidatoForm.patchValue(this.premise);
  //     this.initializeStyles();
  //   } else {
  //     this.candidatoForm.reset();
  //   }
  // }

  submit() {
    const result = this.candidatoForm.getRawValue();
    console.log(result);
    // const premise = this.candidatoForm.getRawValue();
    // if (this.premise && this.premise.id) {
    //   premise.id = this.premise.id;
    // }
    // if (premise.centroCusto) {
    //   const { id } = premise.centroCusto;
    //   premise.centroCusto = { id };
    // }
    // if (premise.empresa) {
    //   const { id, nome } = premise.empresa;
    //   premise.empresa = { id, nome };
    // }
    // premise.subCategoriaPremissa = this.getSubcategoryToSave();
    // premise.grupoEconomico = this.getEconomicGroupToSave();
    // premise["styleTable"] = JSON.stringify(style);
    // if (!premise.id) {
    //   this.createPremise(premise);
    // } else {
    //   this.updatePremise(premise);
    // }
  }
}
