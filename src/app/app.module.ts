import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    DialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
