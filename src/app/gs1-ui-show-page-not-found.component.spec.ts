import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GS1UiShowPageNotFoundComponent } from './gs1-ui-show-page-not-found.component';

describe('GS1UiShowPageNotFoundComponent', () => {
  let component: GS1UiShowPageNotFoundComponent;
  let fixture: ComponentFixture<GS1UiShowPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GS1UiShowPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GS1UiShowPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
