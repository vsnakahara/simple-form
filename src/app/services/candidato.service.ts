import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  url = "http://localhost:3000/candidatos/";

  constructor(private http: HttpClient) { }

  getCandidatos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getCandidato(idCandidato: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}${idCandidato}`);
  }
  
  deleteCandidato(idCandidato: number) {
    return this.http.delete<any[]>(`${this.url}${idCandidato}`);
  }

  editCandidato(candidato: any): Observable<any[]> {
    return this.http.put<any[]>(`${this.url}${candidato.id}`, candidato);
  }
  
}
