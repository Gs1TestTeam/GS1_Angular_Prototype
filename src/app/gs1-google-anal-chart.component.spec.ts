import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs1GoogleAnalChartComponent } from './gs1-google-anal-chart.component';

describe('Gs1GoogleAnalChartComponent', () => {
  let component: Gs1GoogleAnalChartComponent;
  let fixture: ComponentFixture<Gs1GoogleAnalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gs1GoogleAnalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gs1GoogleAnalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
