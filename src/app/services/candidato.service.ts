import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidato } from '../models/candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  url = "http://localhost:3000/candidatos/";
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getCandidatos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getCandidato(idCandidato: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}${idCandidato}`);
  }
  
  deleteCandidato(idCandidato: number) {
    return this.http.delete<any[]>(`${this.url}${idCandidato}`, { headers: this.headers });
  }

  createCandidato(candidato: any): Observable<Candidato> {
    return this.http.post<Candidato>(`${this.url}`, candidato, { headers: this.headers });
  }

  salvarDadosPrivadosCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(`${this.url}`, candidato, { headers: this.headers });
  }

  editCandidato(candidato: any): Observable<any[]> {
    return this.http.put<any[]>(`${this.url}${candidato.id}`, candidato, { headers: this.headers });
  }
  
}
