import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, firstValueFrom } from 'rxjs';
import { Empregados } from '../interfaces/empregados';
import { Genero } from '../empregados/cadastrar-empregado/interfaces/genero';

@Injectable({
  providedIn: 'root',
})
export class EmpregadosService {
  private urlEmpregados = 'http://localhost:3000/empregados';

  constructor(private http: HttpClient) {}

  listarEmpregados(): Observable<Array<Empregados>> {
    return this.http
      .get<Array<Empregados>>(this.urlEmpregados)
      .pipe(shareReplay());
  }

    async cadastrarEmpregado(empregado: Empregados): Promise<Empregados> {
      console.log(empregado)
    return firstValueFrom(this.http.post<Empregados>(this.urlEmpregados, empregado))
  }

  editarEmpregados(empregado: Empregados):Promise<Empregados> {
    const url = `${this.urlEmpregados}/${empregado.id}`
    return firstValueFrom(this.http.put<Empregados>(url, empregado))
  }

  async deletarEmpregado(id: string) {
    const url = `${this.urlEmpregados}/${id}`
    return firstValueFrom(this.http.delete<Empregados>(url))
  }

  listaGeneros(): Array<Genero> {
    return [
      {
        label: 'Masculino',
        value: 'male',
      },
      {
        label: 'Feminino',
        value: 'Female',
      },
      {
        label: 'Outro',
        value: 'Other',
      },
    ];
  }
}
