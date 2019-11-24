import { Component, OnInit } from "@angular/core";
import { CandidatoService } from "../services/candidato.service";

@Component({
  selector: "app-listar-candidatos",
  templateUrl: "./listar-candidatos.component.html",
  styleUrls: ["./listar-candidatos.component.scss"]
})
export class ListarCandidatosComponent implements OnInit {
  candidatos: any[];
  candidato: any;
  constructor(private candidatoService: CandidatoService) {
    this.candidatoService
      .getCandidatos()
      .subscribe(candidatos => (this.candidatos = candidatos));

    this.candidatoService
      .getCandidato(1)
      .subscribe(candidato => (this.candidato = candidato));
  }

  ngOnInit() {}
}
