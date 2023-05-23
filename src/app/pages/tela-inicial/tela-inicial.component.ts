import { AppComponent } from './../../app.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { filmesCurtidos } from 'src/app/interfaces/filmesCurtidos';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent {
  myUrl: string = '../../../assets/image1.svg';

  filmesCurtidos: filmesCurtidos[] = [];

  constructor(public dialog: MatDialog, private service: FilmesService) {}

  ngOnInit(): void {
    this.service.listarFilmes().subscribe((listaFilmes) => {
      console.log(listaFilmes);
    })

    this.listarFilmesCurtidos();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async listarFilmesCurtidos() {
    this.service.listarFilmesCurtidos().subscribe((listaFilmesCurtidos) => {
      this.filmesCurtidos = listaFilmesCurtidos;
    })
  }
}

