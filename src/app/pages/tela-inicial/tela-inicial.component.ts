import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Filmes } from 'src/app/interfaces/filmes';
import { filmesCurtidos } from 'src/app/interfaces/filmesCurtidos';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent {
  myUrl: string = '../../../assets/image1.svg';

  lista10Filmes: Filmes[] = [];
  filmesCurtidos: filmesCurtidos[] = [];

  constructor(public dialog: MatDialog, private service: FilmesService) {}

  ngOnInit(): void {
    // this.service.listarFilmes().subscribe((listaFilmes) => {
    //   this.lista10Filmes =listaFilmes;
    // })

    // this.listarFilmesCurtidos();
  }

  openDialogCurtidos(id_filme: string, count: number, imagem: string, descricao: string, titulo: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { id: id_filme,
        count: count,
        image: imagem,
        plot: descricao,
        title: titulo,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listarFilmesCurtidos();
    });
  }

  async listarFilmesCurtidos() {
    this.service.listarFilmesCurtidos().subscribe((listaFilmesCurtidos) => {
      this.filmesCurtidos = listaFilmesCurtidos;
    })
  }

}

