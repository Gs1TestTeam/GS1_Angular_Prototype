/********************************************************************************* 
 * Project: GS1 Canada Angular Prototype
 * File: gs1-ui-show-button.component.spec.ts
 * part of component for back button
 * 
 * Created by Olga Arsenieva
 * Date: 2018.08.16
 * 
********************************************************************************/  
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs1UiShowBackButtonComponent } from './gs1-ui-show-back-button.component';

describe('Gs1UiShowBackButtonComponent', () => {
  let component: Gs1UiShowBackButtonComponent;
  let fixture: ComponentFixture<Gs1UiShowBackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gs1UiShowBackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gs1UiShowBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
