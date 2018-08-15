import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GS1UiShowDetailComponent } from './gs1-ui-show-detail.component';

describe('GS1UiShowDetailComponent', () => {
  let component: GS1UiShowDetailComponent;
  let fixture: ComponentFixture<GS1UiShowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GS1UiShowDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GS1UiShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
