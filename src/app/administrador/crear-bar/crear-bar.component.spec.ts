import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBarComponent } from './crear-bar.component';

describe('CrearBarComponent', () => {
  let component: CrearBarComponent;
  let fixture: ComponentFixture<CrearBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
