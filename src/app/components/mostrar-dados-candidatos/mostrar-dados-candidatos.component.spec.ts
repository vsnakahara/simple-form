import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDadosCandidatosComponent } from './mostrar-dados-candidatos.component';

describe('MostrarDadosCandidatosComponent', () => {
  let component: MostrarDadosCandidatosComponent;
  let fixture: ComponentFixture<MostrarDadosCandidatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDadosCandidatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDadosCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
