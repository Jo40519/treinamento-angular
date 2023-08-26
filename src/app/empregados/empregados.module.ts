import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpregadosRoutingModule } from './empregados-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ListarEmpregadosComponent } from './listar-empregados/listar-empregados.component';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastrarEmpregadoComponent } from './cadastrar-empregado/cadastrar-empregado.component';
import { EmpregadosService } from '../services/empregados.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificaService } from '../services/notifica.service';
import { MessageService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



@NgModule({
  declarations: [ListarEmpregadosComponent, CadastrarEmpregadoComponent],
  imports: [
    CommonModule,
    EmpregadosRoutingModule,
    CommonModule, 
    HttpClientModule, 
    CardModule, 
    ButtonModule, 
    RouterModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule,
    InputMaskModule,
    MessagesModule,
    MessageModule
  ],
  providers: [EmpregadosService, NgbModal, NotificaService, MessageService]
})
export class EmpregadosModule { }
