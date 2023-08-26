import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { EmpregadosService } from 'src/app/services/empregados.service';
import { Observable } from 'rxjs';
import { Empregados } from 'src/app/interfaces/empregados';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastrarEmpregadoComponent } from '../cadastrar-empregado/cadastrar-empregado.component';
import { NotificaService } from 'src/app/services/notifica.service';

@Component({
  selector: 'app-listar-empregados',
  templateUrl: './listar-empregados.component.html',
  styleUrls: ['./listar-empregados.component.scss'],
})
export class ListarEmpregadosComponent implements OnInit {
  empregados$!: Observable<Array<Empregados>>;

  constructor(
    private empregadosService: EmpregadosService,
    private router: Router,
    private modal: NgbModal,
    private notificaService: NotificaService
  ) {}

  ngOnInit(): void {
    this.empregados$ = this.empregadosService.listarEmpregados();
  }

  editarEmpregados(empregado: Empregados) {
    console.log(empregado.id);
    const modalRef = this.modal.open(CadastrarEmpregadoComponent, {
      size: 'xl',
    });
    modalRef.componentInstance.empregadoParaEditar = empregado;
    modalRef.componentInstance.close = modalRef;
    modalRef.result.then((value) => {
      this.ngOnInit()
    })
  }

  async deletarEmpregado(id: string) {
    const resposta = await this.empregadosService.deletarEmpregado(id);

    if (resposta) {
      alert('Empregado deletado com sucesso!')
      this.ngOnInit()
      this.notificaService.criaSucesso('Empregado deletado com sucesso!', 'Sucesso!');
    }
  }
}
