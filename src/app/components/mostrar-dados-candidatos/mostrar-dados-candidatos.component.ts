import { Component, OnInit, Input } from "@angular/core";
import { Candidato } from "../../models/candidato";
import { DadosPublicos } from '../../models/dadosPublicos';

@Component({
  selector: "app-mostrar-dados-candidatos",
  templateUrl: "./mostrar-dados-candidatos.component.html",
  styleUrls: ["./mostrar-dados-candidatos.component.scss"]
})
export class MostrarDadosCandidatosComponent implements OnInit {
  @Input() candidato: Candidato;
  
  constructor() {}

  ngOnInit() {}
}
