import { Component, OnInit } from "@angular/core";
import { CandidatoService } from "../services/candidato.service";
import { Candidato } from "../models/candidato";

@Component({
  selector: "app-listar-candidatos",
  templateUrl: "./listar-candidatos.component.html",
  styleUrls: ["./listar-candidatos.component.scss"]
})
export class ListarCandidatosComponent implements OnInit {
  candidatos: Candidato[];
  candidato;

  constructor(private candidatoService: CandidatoService) {
    this.candidatoService.getCandidatos().subscribe(candidatos => {
      this.candidatos = candidatos;
      this.candidato = candidatos[0];
    });
  }

  ngOnInit() {}
}
