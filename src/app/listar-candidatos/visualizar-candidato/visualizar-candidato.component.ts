import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CandidatoService } from "../../services/candidato.service";
import { Candidato } from "src/app/models/candidato";

@Component({
  selector: "app-visualizar-candidato",
  templateUrl: "./visualizar-candidato.component.html",
  styleUrls: ["./visualizar-candidato.component.scss"]
})
export class VisualizarCandidatoComponent implements OnInit {
  candidato: Candidato;

  constructor(
    private activatedRoute: ActivatedRoute,
    private candidatoService: CandidatoService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params["id"];

      console.log(`${id}`);
      this.candidatoService
        .getCandidato(id)
        .subscribe(candidato => (this.candidato = candidato));
    });
  }
}
