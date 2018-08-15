import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GS1UiShowFooterComponent } from './gs1-ui-show-footer.component';

describe('GS1UiShowFooterComponent', () => {
  let component: GS1UiShowFooterComponent;
  let fixture: ComponentFixture<GS1UiShowFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GS1UiShowFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GS1UiShowFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
