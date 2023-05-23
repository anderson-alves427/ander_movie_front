import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { filmesCurtidos } from 'src/app/interfaces/filmesCurtidos';
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
    @Inject(MAT_DIALOG_DATA) public data: filmesCurtidos,
    private service: FilmesService
  ) {}

  fechaDialog(): void {
    this.dialogRef.close();
  }

  handleClickCurtida() {
    if (this.filmeJaCurtido) {
      this.removerCurtida(this.data._id);
    }

    if (!this.filmeJaCurtido) {
      this.curtirFilme(this.data._id);
    }
  }
  async curtirFilme(id_filme: string) {
    this.service.curtirFilme(id_filme).subscribe(() => {
      this.filmeJaCurtido = true;
    })
  }

  async removerCurtida(id_filme: string) {
    this.service.removeCurtida(id_filme).subscribe(() => {
      this.filmeJaCurtido = false;
    })
  }
}
