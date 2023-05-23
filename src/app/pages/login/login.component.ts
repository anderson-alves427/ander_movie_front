import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: string;
  senha: string;

  constructor() {
    this.usuario = '';
    this.senha = '';
  }

  onLogin(): void {

  }
}
