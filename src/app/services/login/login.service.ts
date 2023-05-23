import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:8080/';

  constructor(private readonly http: HttpClient) { }

  login(usuario: string, senha: string): Observable<{ accessToken: string}> {
    return this.http.post<{ accessToken: string}>(this.API + 'auth/login', {usuario, senha});
  }
}
