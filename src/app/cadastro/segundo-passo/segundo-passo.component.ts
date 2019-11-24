import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-segundo-passo",
  templateUrl: "./segundo-passo.component.html",
  styleUrls: ["./segundo-passo.component.scss"]
})
export class SegundoPassoComponent implements OnInit {
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
      empresa: [null, Validators.required],
      centroCusto: [null],
      unidadeDeMedida: "",
      moeda: "",
      campo1: "",
      campo2: "",
      campo3: "",
      campo4: ""
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
