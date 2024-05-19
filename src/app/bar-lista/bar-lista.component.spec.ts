import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarListaComponent } from './bar-lista.component';

describe('BarListaComponent', () => {
  let component: BarListaComponent;
  let fixture: ComponentFixture<BarListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
