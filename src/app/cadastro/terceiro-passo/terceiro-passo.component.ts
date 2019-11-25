import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Candidato } from "../../models/candidato";
import { CandidatoService } from "../../services/candidato.service";

@Component({
  selector: "app-terceiro-passo",
  templateUrl: "./terceiro-passo.component.html",
  styleUrls: ["./terceiro-passo.component.scss"]
})
export class TerceiroPassoComponent implements OnInit {
  @Input() candidato: Candidato;
  @Output() emitirFotoCandidato = new EventEmitter<Candidato>();

  arquivoSelecionado;
  nomeArquivoSelecionado: string;
  errorMessage: string;
  

  constructor(private candidatoService: CandidatoService) {}

  ngOnInit() {}

  onFileChanged(event) {
    const file = <File>event.target.files[0];

    if (file) {
      this.nomeArquivoSelecionado = file.name;
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  private handleReaderLoaded(e) {
    const binaryString = e.target.result;
    this.arquivoSelecionado = "data:image/png;base64," + btoa(binaryString);
  }

  submit() {
    this.candidato.thumbnail = this.arquivoSelecionado;
    if (this.candidato.id && this.candidato.thumbnail) {
      this.salvarFotoCandidato(this.candidato);
    } else {
      this.errorMessage = 'Selecione uma imagem válida!'
    }
  }

  salvarFotoCandidato(candidato: Candidato) {
    this.candidatoService
      .editarCandidato(candidato)
      .subscribe(response => {
        const novoCandidato = response;
        this.emitirFotoCandidato.emit(novoCandidato);
      });
  }
}
