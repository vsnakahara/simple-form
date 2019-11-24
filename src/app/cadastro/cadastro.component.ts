import { Component, OnInit } from "@angular/core";
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"]
})
export class CadastroComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 0;

  constructor() {}

  ngOnInit() {
    this.items = [
      { label: "Dados Básicos" },
      { label: "Dados Complementares" },
      { label: "Step 3" }
    ];
  }
}
