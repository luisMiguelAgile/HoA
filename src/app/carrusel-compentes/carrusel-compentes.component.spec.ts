import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselCompentesComponent } from './carrusel-compentes.component';

describe('CarruselCompentesComponent', () => {
  let component: CarruselCompentesComponent;
  let fixture: ComponentFixture<CarruselCompentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselCompentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselCompentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
