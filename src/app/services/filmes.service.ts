import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly API = 'http://localhost:8080/';

  constructor(private readonly http: HttpClient) { }

  listarFilmes(): Observable<any> {
    return this.http.get<any>(this.API + 'filme/lista');
  }

  listarFilmesCurtidos(): Observable<any> {
    return this.http.get<any>(this.API + 'filme/listaCurtidos');
  }

  curtirFilme(id_filme: string): Observable<any> {
    return this.http.post<any>(this.API + `filme/${id_filme}/curtida`, {});
  }

  removeCurtida(id_filme: string): Observable<any> {
    return this.http.delete<any>(this.API + `filme/${id_filme}/curtida`);
  }

}
