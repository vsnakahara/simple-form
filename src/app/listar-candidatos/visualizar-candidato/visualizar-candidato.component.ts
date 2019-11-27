import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private candidatoService: CandidatoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params["id"];

      this.candidatoService
        .getCandidato(id)
        .subscribe(candidato => (this.candidato = candidato));
    });
  }

  excluirCandidato() {
    console.log("sucesso1");
    this.candidatoService
      .deleteCandidato(this.candidato.id)
      .subscribe(response => {
        console.log("sucesso");
        this.voltarParaPaginaInicial();
      });
  }

  voltarParaPaginaInicial() {
    this.router.navigateByUrl("/");
  }
}
