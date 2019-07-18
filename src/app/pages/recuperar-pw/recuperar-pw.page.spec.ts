import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarPwPage } from './recuperar-pw.page';

describe('RecuperarPwPage', () => {
  let component: RecuperarPwPage;
  let fixture: ComponentFixture<RecuperarPwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarPwPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarPwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
