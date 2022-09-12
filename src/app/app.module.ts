import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { NgModule } from '@angular/core';
import { NovoCarroComponent } from './novo-carro/novo-carro.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent,
    ListaCarrosComponent,
    NovoCarroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
