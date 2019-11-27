import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-quinto-passo",
  templateUrl: "./quinto-passo.component.html",
  styleUrls: ["./quinto-passo.component.scss"]
})
export class QuintoPassoComponent {
  isConfirmado = false;
  showAlert = false;

  constructor(private router: Router) {}

  concluir() {
    this.showAlert = true;
  }

  voltarParaPaginaInicial() {
    this.router.navigateByUrl("/");
  }
}
