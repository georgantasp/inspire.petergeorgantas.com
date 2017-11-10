import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEnergyUsageComponent } from './daily-energy-usage.component';

describe('DailyEnergyUsageComponent', () => {
  let component: DailyEnergyUsageComponent;
  let fixture: ComponentFixture<DailyEnergyUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyEnergyUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEnergyUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
