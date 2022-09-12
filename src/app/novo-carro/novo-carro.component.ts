import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarroService} from "../../service/carro.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Carro} from "../lista-carros/lista-carros.component";
import {SwallUtil} from "../../service/SwallUtil";

@Component({
  selector: 'app-novo-carro',
  templateUrl: './novo-carro.component.html',
  styleUrls: ['./novo-carro.component.scss']
})
export class NovoCarroComponent implements OnInit {
  formGroup = new FormGroup({
    _id: new FormControl(null),
    placa: new FormControl(null),
    renavam: new FormControl(null),
    chassi: new FormControl(null),
    modelo: new FormControl(null),
    ano: new FormControl(null),
    marca: new FormControl(null),
  })

  id: any;

  constructor(private carroService: CarroService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.route.params.subscribe( params => {
        this.id = params['id'];
      })

      if (this.id) {
        this.carroService.buscarPorId(this.id).subscribe((resp: Carro) => {
          const value: Carro = {
            _id: resp._id,
            placa: resp.placa,
            renavam: resp.renavam,
            chassi: resp.chassi,
            modelo: resp.modelo,
            ano: resp.ano,
            marca: resp.marca,
          };
          // @ts-ignore todo: tslint type value error
          this.formGroup.patchValue(value);
        })
      }
  }

  enviar() {
    const carro = this.formGroup.value;
    if (this.id) {
      this.carroService.update(this.id, carro).subscribe((resp) =>{
        SwallUtil.mensagemSucesso("Alterado com sucesso");
        this.router.navigate(["/"]);
      }, (err) => {
        SwallUtil.mensagemError("erro ao alterar");
      })
    } else {
      this.carroService.salvar(carro).subscribe((resp) =>{
        SwallUtil.mensagemSucesso("Salvo com sucesso");
        this.router.navigate(["/"]);
      }, (err) => {
        SwallUtil.mensagemError("erro ao salvar");
      })
    }
  }
}
