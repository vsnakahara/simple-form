import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: "app-terceiro-passo",
  templateUrl: "./terceiro-passo.component.html",
  styleUrls: ["./terceiro-passo.component.scss"]
})
export class TerceiroPassoComponent implements OnInit {
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
