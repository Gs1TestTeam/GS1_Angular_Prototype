import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GS1UiShowLogoComponent } from './gs1-ui-show-logo.component';

describe('GS1UiShowLogoComponent', () => {
  let component: GS1UiShowLogoComponent;
  let fixture: ComponentFixture<GS1UiShowLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GS1UiShowLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GS1UiShowLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
