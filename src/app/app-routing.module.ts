import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaCarrosComponent} from "./lista-carros/lista-carros.component";
import {NovoCarroComponent} from "./novo-carro/novo-carro.component";

const routes: Routes = [
  { path: '', component: ListaCarrosComponent},
  { path: 'novo-carro', component: NovoCarroComponent},
  { path: 'editar-carro/:id', component: NovoCarroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
