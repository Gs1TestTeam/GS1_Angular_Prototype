import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GS1UiShowNavigationComponent } from './gs1-ui-show-navigation.component';

describe('GS1UiShowNavigationComponent', () => {
  let component: GS1UiShowNavigationComponent;
  let fixture: ComponentFixture<GS1UiShowNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GS1UiShowNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GS1UiShowNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
