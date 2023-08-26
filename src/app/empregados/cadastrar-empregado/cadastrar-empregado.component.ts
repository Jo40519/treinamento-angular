import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Genero } from './interfaces/genero';
import { EmpregadosService } from 'src/app/services/empregados.service';
import { FormEmpregados } from './interfaces/form-empregados';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Empregados } from 'src/app/interfaces/empregados';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificaService } from 'src/app/services/notifica.service';

@Component({
  selector: 'app-cadastrar-empregado',
  templateUrl: './cadastrar-empregado.component.html',
  styleUrls: ['./cadastrar-empregado.component.scss'],
})
export class CadastrarEmpregadoComponent implements OnInit {
  generos: Array<Genero> = [];
  empregados!: Empregados;
  IFormCadastrarEditarEmpregado: FormEmpregados = {} as FormEmpregados;
  empregadoCadastrado!: Observable<Empregados>;
  empregadoParaEditar!: Empregados;
  close: any;
  constructor(
    public empregadosService: EmpregadosService,
    private router: Router,
    public modal: NgbModal,
    private notificaService: NotificaService
  ) {}

  formCadastrarEditarEmpregado = new FormGroup<FormEmpregados>({
    nome: new FormControl(
      this.empregadoParaEditar ? this.empregadoParaEditar.nome : '',
      {
        nonNullable: true,
        validators: [Validators.required],
      }
    ),
    sobrenome: new FormControl(
      this.empregadoParaEditar ? this.empregadoParaEditar.sobrenome : '',
      {
        nonNullable: true,
        validators: [Validators.required],
      }
    ),
    genero: new FormControl(
      this.empregadoParaEditar ? this.empregadoParaEditar.genero : '',
      {
        nonNullable: true,
        validators: [Validators.required],
      }
    ),
    idade: new FormControl(
      this.empregadoParaEditar ? this.empregadoParaEditar.idade : null,
      {
        nonNullable: true,
        validators: [Validators.required],
      }
    ),
    telefone: new FormControl(
      this.empregadoParaEditar ? this.empregadoParaEditar.telefone : '',
      {
        nonNullable: true,
        validators: [Validators.required],
      }
    ),
    endereco: new FormControl(
      this.empregadoParaEditar ? this.empregadoParaEditar.endereco : '',
      {
        nonNullable: true,
        validators: [Validators.required],
      }
    ),
    corCabelo: new FormControl(
      this.empregadoParaEditar ? this.empregadoParaEditar.corCabelo : '',
      { nonNullable: false }
    ),
  });
  ngOnInit(): void {
    if (this.empregadoParaEditar) {
      this.setarValorNoFormulario();
    }
    this.generos = this.empregadosService.listaGeneros();
  }

  async cadastrarEmpregados() {
    const empregado: Empregados = {
      id: this.empregadoParaEditar
        ? this.empregadoParaEditar.id
        : this.empregados?.id,
      nome: this.formCadastrarEditarEmpregado.get('nome')?.value!,
      sobrenome: this.formCadastrarEditarEmpregado.get('sobrenome')?.value!,
      genero: this.formCadastrarEditarEmpregado.get('genero')?.value!,
      telefone: this.formCadastrarEditarEmpregado.get('telefone')?.value!,
      corCabelo: this.formCadastrarEditarEmpregado.get('corCabelo')?.value!,
      idade: this.formCadastrarEditarEmpregado.get('idade')?.value!,
      endereco: this.formCadastrarEditarEmpregado.get('endereco')?.value!,
      foto: 'https://i.pravatar.cc/199',
      salario: 'R$ 4.0000',
    };
    console.log(empregado);
    if (this.empregadoParaEditar) {
      const respostaEditar = await this.empregadosService.editarEmpregados(
        empregado
      );

      if (respostaEditar) {
        alert('EMPREGADO ALTERADO COM SUCESSO');
        this.fecharModal();
      }
    } else {
      const resposta = await this.empregadosService.cadastrarEmpregado(
        empregado
      );

      if (resposta) {
        alert('EMPREGADO CADASTRADO COM SUCESSO');
        this.router.navigate(['/listar-empregados']);
      }
    }
  }

  setarValorNoFormulario() {
    this.formCadastrarEditarEmpregado.patchValue({
      nome: this.empregadoParaEditar.nome,
      sobrenome: this.empregadoParaEditar.sobrenome,
      genero: this.empregadoParaEditar.genero,
      idade: this.empregadoParaEditar.idade,
      endereco: this.empregadoParaEditar.endereco,
      telefone: this.empregadoParaEditar.telefone,
      corCabelo: this.empregadoParaEditar.corCabelo,
    });
  }

  fecharModal() {
    this.close.close();
  }
}
