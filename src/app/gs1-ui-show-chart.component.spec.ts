import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GS1UiShowChartComponent } from './gs1-ui-show-chart.component';

describe('GS1UiShowChartComponent', () => {
  let component: GS1UiShowChartComponent;
  let fixture: ComponentFixture<GS1UiShowChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GS1UiShowChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GS1UiShowChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
