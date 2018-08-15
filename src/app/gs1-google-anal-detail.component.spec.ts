import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs1GoogleAnalDetailComponent } from './gs1-google-anal-detail.component';

describe('Gs1GoogleAnalDetailComponent', () => {
  let component: Gs1GoogleAnalDetailComponent;
  let fixture: ComponentFixture<Gs1GoogleAnalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gs1GoogleAnalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gs1GoogleAnalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
