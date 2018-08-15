import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs1GoogleAnalList2Component } from './gs1-google-anal-list2.component';

describe('Gs1GoogleAnalList2Component', () => {
  let component: Gs1GoogleAnalList2Component;
  let fixture: ComponentFixture<Gs1GoogleAnalList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gs1GoogleAnalList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gs1GoogleAnalList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
