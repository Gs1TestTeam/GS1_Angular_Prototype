import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GS1UiShowHeaderComponent } from './gs1-ui-show-header.component';

describe('GS1UiShowHeaderComponent', () => {
  let component: GS1UiShowHeaderComponent;
  let fixture: ComponentFixture<GS1UiShowHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GS1UiShowHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GS1UiShowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
