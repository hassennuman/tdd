import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundStrategyRequestComponent } from './mutual-fund-strategy-request.component';

describe('MutualFundStrategyRequestComponent', () => {
  let component: MutualFundStrategyRequestComponent;
  let fixture: ComponentFixture<MutualFundStrategyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualFundStrategyRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundStrategyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
