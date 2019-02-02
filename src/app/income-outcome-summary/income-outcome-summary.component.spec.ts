import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeOutcomeSummaryComponent } from './income-outcome-summary.component';

describe('IncomeOutcomeSummaryComponent', () => {
  let component: IncomeOutcomeSummaryComponent;
  let fixture: ComponentFixture<IncomeOutcomeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeOutcomeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeOutcomeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
