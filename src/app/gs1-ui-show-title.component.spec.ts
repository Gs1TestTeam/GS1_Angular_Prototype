import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs1UiShowTitleComponent } from './gs1-ui-show-title.component';

describe('Gs1UiShowTitleComponent', () => {
  let component: Gs1UiShowTitleComponent;
  let fixture: ComponentFixture<Gs1UiShowTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gs1UiShowTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gs1UiShowTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
