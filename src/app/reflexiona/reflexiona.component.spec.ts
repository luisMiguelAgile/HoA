import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexionaComponent } from './reflexiona.component';

describe('ReflexionaComponent', () => {
  let component: ReflexionaComponent;
  let fixture: ComponentFixture<ReflexionaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflexionaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflexionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
