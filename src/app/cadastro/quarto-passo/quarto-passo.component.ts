import { Component, OnInit, Input } from "@angular/core";
import { Candidato } from "../../models/candidato";

@Component({
  selector: "app-quarto-passo",
  templateUrl: "./quarto-passo.component.html",
  styleUrls: ["./quarto-passo.component.scss"]
})
export class QuartoPassoComponent implements OnInit {
  @Input() candidato: Candidato;

  constructor() {}

  ngOnInit() {}
}
