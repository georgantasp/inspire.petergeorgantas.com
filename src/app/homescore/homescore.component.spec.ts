import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomescoreComponent } from './homescore.component';

describe('HomescoreComponent', () => {
  let component: HomescoreComponent;
  let fixture: ComponentFixture<HomescoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomescoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
