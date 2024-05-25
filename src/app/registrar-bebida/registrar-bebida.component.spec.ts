import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBebidaComponent } from './registrar-bebida.component';

describe('RegistrarBebidaComponent', () => {
  let component: RegistrarBebidaComponent;
  let fixture: ComponentFixture<RegistrarBebidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarBebidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
