import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiseFundsComponent } from './rise-funds.component';

describe('RiseFundsComponent', () => {
  let component: RiseFundsComponent;
  let fixture: ComponentFixture<RiseFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiseFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiseFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
