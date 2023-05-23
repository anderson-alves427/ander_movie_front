import { AppComponent } from './../../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent {
  myUrl: string = '../../../assets/image1.svg';
}
