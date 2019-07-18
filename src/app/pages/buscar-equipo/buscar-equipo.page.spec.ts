import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEquipoPage } from './buscar-equipo.page';

describe('BuscarEquipoPage', () => {
  let component: BuscarEquipoPage;
  let fixture: ComponentFixture<BuscarEquipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarEquipoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
