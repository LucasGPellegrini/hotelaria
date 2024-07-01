import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHomeComponent } from './cadastro-home.component';

describe('CadastroHomeComponent', () => {
  let component: CadastroHomeComponent;
  let fixture: ComponentFixture<CadastroHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
