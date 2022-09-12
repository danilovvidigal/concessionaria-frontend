import {Component, OnInit} from '@angular/core';
import {CarroService} from "../../service/carro.service";
import {SwallUtil} from "../../service/SwallUtil";

export interface Carro {
  _id: string,
  placa: string,
  chassi: string,
  renavam: string,
  modelo: string,
  marca: string,
  ano: string,
}
@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.scss']
})
export class ListaCarrosComponent implements OnInit {

  carros: Carro[] = [];

  constructor(private carroService: CarroService) { }

  ngOnInit(): void {
    this.buscarTodosOsCarros();
  }

  async buscarTodosOsCarros() {
    try {
      this.carros = await this.carroService.buscarTodos().toPromise();
    } catch (e) {
      SwallUtil.mensagemError("erro ao buscar os carros.");
    }
  }

  deletar(id: any) {
    SwallUtil.mensagemConfirmacao().then((result) => {
      if (result.isConfirmed) {
        this.carroService.deletar(id).subscribe(() => {
          this.buscarTodosOsCarros();
          SwallUtil.mensagemSucesso("deletado com sucesso");
        }, (err) => {
          SwallUtil.mensagemError("não foi possivel deletar o carro.");
        })
      }
    })
  }
}
