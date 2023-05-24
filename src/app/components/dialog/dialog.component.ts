import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Filmes } from 'src/app/interfaces/filmes';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  filmeJaCurtido: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Filmes,
    private service: FilmesService
  ) {}

  ngOnInit(): void {
    this.verificaCurtida();
  }

  fechaDialog(): void {
    this.dialogRef.close();
  }

  handleClickCurtida() {
    console.log(this.data)
    if (this.filmeJaCurtido) {
      this.removerCurtida(this.data.id);
    }

    if (!this.filmeJaCurtido) {
      this.curtirFilme(this.data.id);
    }
  }

  async curtirFilme(id_filme: string) {
    this.service.curtirFilme(id_filme).subscribe(() => {
      this.filmeJaCurtido = true;
      this.data.count = + 1;
    })
  }

  async removerCurtida(id_filme: string) {
    this.service.removeCurtida(id_filme).subscribe(() => {
      this.filmeJaCurtido = false;
      this.data.count = - 1;
    })
  }

  async verificaCurtida() {
    this.service.verificaCurtida(this.data.id).subscribe((response) => {
      this.filmeJaCurtido = response;
    })
  }

}
