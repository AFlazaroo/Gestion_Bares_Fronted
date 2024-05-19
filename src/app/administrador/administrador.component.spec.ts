import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministradorComponent } from './administrador.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AdministradorComponent', () => {
  let component: AdministradorComponent;
  let fixture: ComponentFixture<AdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorComponent ],
      providers: [
        { 
          provide: BreakpointObserver, 
          useValue: { observe: () => of({ matches: false }) } 
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
