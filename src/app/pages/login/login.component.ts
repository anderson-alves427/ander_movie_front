import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: string;
  senha: string;
  errorMessage: string;


  constructor( private service: LoginService, private router: Router) {
    this.usuario = '';
    this.senha = '';
    this.errorMessage = '';
  }

  async login() {
    this.service.login(this.usuario, this.senha)
    .pipe(
      catchError((error) => {
        this.errorMessage = error.error?.message ? error.error?.message : 'Ocorreu um erro no login, contate o suporte.';
        console.log(error)
        return of(null);
      })
    )
    .subscribe((token) => {
      console.log('teste')
      if (token) {
        localStorage.setItem('@token', token.accessToken);
        this.router.navigate(['/inicio']);
      }
    });
  }

}
