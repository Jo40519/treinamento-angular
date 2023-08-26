import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEmpregadoComponent } from './cadastrar-empregado/cadastrar-empregado.component';
import { ListarEmpregadosComponent } from './listar-empregados/listar-empregados.component';

const routes: Routes = [
  {
    path: '',
    component: ListarEmpregadosComponent
  },
  {
    path: 'cadastrar-empregado',
    component: CadastrarEmpregadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpregadosRoutingModule { }
