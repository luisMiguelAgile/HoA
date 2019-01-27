import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoraComponent } from './mejora.component';

describe('MejoraComponent', () => {
  let component: MejoraComponent;
  let fixture: ComponentFixture<MejoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MejoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
