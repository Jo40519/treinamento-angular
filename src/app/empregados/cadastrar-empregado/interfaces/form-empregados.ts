import {FormControl} from '@angular/forms'

export interface FormEmpregados {
    nome: FormControl<string>;
    sobrenome: FormControl<string>;
    idade: FormControl<number | null>;
    telefone: FormControl<string>;
    genero: FormControl<string>;
    endereco: FormControl<string>;
    corCabelo: FormControl<string | null>;
}
