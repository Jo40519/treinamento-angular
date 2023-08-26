import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpregadosComponent } from './listar-empregados.component';

describe('ListarEmpregadosComponent', () => {
  let component: ListarEmpregadosComponent;
  let fixture: ComponentFixture<ListarEmpregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEmpregadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEmpregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
