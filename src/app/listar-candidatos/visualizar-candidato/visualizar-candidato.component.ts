import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-visualizar-candidato",
  templateUrl: "./visualizar-candidato.component.html",
  styleUrls: ["./visualizar-candidato.component.scss"]
})
export class VisualizarCandidatoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params["id"];

      console.log(`${id}`);
    });
  }
  
}
