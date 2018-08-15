import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs1GoogleAnalList3Component } from './gs1-google-anal-list3.component';

describe('Gs1GoogleAnalList3Component', () => {
  let component: Gs1GoogleAnalList3Component;
  let fixture: ComponentFixture<Gs1GoogleAnalList3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gs1GoogleAnalList3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gs1GoogleAnalList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
