import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs1GoogleAnalListComponent } from './gs1-google-anal-list.component';

describe('Gs1GoogleAnalListComponent', () => {
  let component: Gs1GoogleAnalListComponent;
  let fixture: ComponentFixture<Gs1GoogleAnalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gs1GoogleAnalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gs1GoogleAnalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
