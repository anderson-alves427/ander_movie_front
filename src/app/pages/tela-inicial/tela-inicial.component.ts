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
  filmeSelecionado: filmesCurtidos | null = null;

  constructor(public dialog: MatDialog, private service: FilmesService) {}

  ngOnInit(): void {
    this.service.listarFilmes().subscribe((listaFilmes) => {
      console.log(listaFilmes);
    })

    this.listarFilmesCurtidos();
  }

  openDialog(filme: filmesCurtidos): void {
    this.filmeSelecionado = filme;
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { id: filme._id,
        quantidade_curtidas: filme.quantidade_curtidas,
        imagem: filme.imagem,
        descricao: filme.descricao,
        titulo: filme.titulo,
      }
    });
    console.log(filme)
    dialogRef.afterClosed().subscribe(result => {
      this.filmeSelecionado = null;
    });
  }

  async listarFilmesCurtidos() {
    this.service.listarFilmesCurtidos().subscribe((listaFilmesCurtidos) => {
      this.filmesCurtidos = listaFilmesCurtidos;
    })
  }
}

