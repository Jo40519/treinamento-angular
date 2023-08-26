import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { EmpregadosService } from 'src/app/services/empregados.service';
import { Observable } from 'rxjs';
import { Empregados } from 'src/app/interfaces/empregados';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, TableModule, HttpClientModule, ButtonModule],
  providers: [EmpregadosService],
})
export class HomeComponent implements OnInit {
  empregados$!: Observable<Array<Empregados>>;
  constructor(private empregadosService: EmpregadosService) {}

  ngOnInit(): void {
  }
}
