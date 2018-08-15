import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GS1UiShowTableComponent } from './gs1-ui-show-table.component';

describe('GS1UiShowTableComponent', () => {
  let component: GS1UiShowTableComponent;
  let fixture: ComponentFixture<GS1UiShowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GS1UiShowTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GS1UiShowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
