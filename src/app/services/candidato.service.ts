import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Candidato } from "../models/candidato";

@Injectable({
  providedIn: "root"
})
export class CandidatoService {
  url = "http://localhost:3000/candidatos/";
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  getCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.url);
  }

  getCandidato(idCandidato: number): Observable<Candidato> {
    return this.http.get<Candidato>(`${this.url}${idCandidato}`);
  }

  deleteCandidato(idCandidato: number): Observable<any> {
    return this.http.delete<Candidato>(`${this.url}${idCandidato}`, {
      headers: this.headers
    });
  }

  createCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(`${this.url}`, candidato, {
      headers: this.headers
    });
  }

  salvarDadosPrivadosCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(`${this.url}`, candidato, {
      headers: this.headers
    });
  }

  editarCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(`${this.url}${candidato.id}`, candidato, {
      headers: this.headers
    });
  }
}
