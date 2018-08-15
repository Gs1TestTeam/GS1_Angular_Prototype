import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GS1UiShowContentsComponent } from './gs1-ui-show-contents.component';

describe('GS1UiShowContentsComponent', () => {
  let component: GS1UiShowContentsComponent;
  let fixture: ComponentFixture<GS1UiShowContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GS1UiShowContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GS1UiShowContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
