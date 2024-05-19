import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBarComponent } from './inicio-bar.component';

describe('InicioBarComponent', () => {
  let component: InicioBarComponent;
  let fixture: ComponentFixture<InicioBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
