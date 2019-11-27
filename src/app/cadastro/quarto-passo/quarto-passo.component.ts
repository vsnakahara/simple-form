import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Candidato } from "../../models/candidato";

@Component({
  selector: "app-quarto-passo",
  templateUrl: "./quarto-passo.component.html",
  styleUrls: ["./quarto-passo.component.scss"]
})
export class QuartoPassoComponent implements OnInit {
  @Input() candidato: Candidato;
  @Output() concluirCadastro = new EventEmitter<null>();

  constructor() {}

  ngOnInit() {}

  confirmar() {
    this.concluirCadastro.emit();
  }
}
