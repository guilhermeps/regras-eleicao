import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisincompatilizationComponent } from './disincompatilization.component';

describe('DisincompatilizationComponent', () => {
  let component: DisincompatilizationComponent;
  let fixture: ComponentFixture<DisincompatilizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisincompatilizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisincompatilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
