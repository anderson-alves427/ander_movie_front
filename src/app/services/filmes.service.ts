import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly API = 'http://localhost:8080/'
  constructor(private readonly http: HttpClient) { }


  listarFilmes(): Observable<any> {
    return this.http.get<any>(this.API + 'filme/lista');
  }

  listarFilmesCurtidos(): Observable<any> {
    return this.http.get<any>(this.API + 'filme/listaCurtidos');
  }

}
