import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Carro} from "../app/lista-carros/lista-carros.component";

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<any> {
    return this.http.get(`http://localhost:4001/carros/`);
  }

  buscarPorId(id: any): Observable<any> {
    return this.http.get(`http://localhost:4001/carros/${id}`);
  }

  salvar(carro: any) {
    return this.http.post(`http://localhost:4001/carros/`, carro);
  }

  deletar(id: any) {
    return this.http.delete(`http://localhost:4001/carros/${id}`);
  }

  update(id: any, carro: any) {
    return this.http.put(`http://localhost:4001/carro/${id}`,carro);
  }
}
