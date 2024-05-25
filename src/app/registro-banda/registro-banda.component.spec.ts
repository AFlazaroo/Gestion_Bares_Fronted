import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBandaComponent } from './registro-banda.component';

describe('RegistroBandaComponent', () => {
  let component: RegistroBandaComponent;
  let fixture: ComponentFixture<RegistroBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroBandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
