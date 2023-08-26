import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEmpregadoComponent } from './cadastrar-empregado.component';

describe('CadastrarEmpregadoComponent', () => {
  let component: CadastrarEmpregadoComponent;
  let fixture: ComponentFixture<CadastrarEmpregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEmpregadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
