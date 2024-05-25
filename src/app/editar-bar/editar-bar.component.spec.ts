import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBarComponent } from './editar-bar.component';

describe('EditarBarComponent', () => {
  let component: EditarBarComponent;
  let fixture: ComponentFixture<EditarBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
