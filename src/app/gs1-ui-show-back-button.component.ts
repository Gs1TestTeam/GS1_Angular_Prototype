/********************************************************************************* 
 * Project: GS1 Canada Angular Prototype
 * File: gs1-ui-show-button.component.ts
 * component for back button
 * 
 * Created by Olga Arsenieva
 * Date: 2018.08.16
 * 
********************************************************************************/  
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gs1-ui-show-back-button',
  templateUrl: './gs1-ui-show-back-button.component.html',
  styleUrls: ['./gs1-ui-show-back-button.component.css']
})
export class Gs1UiShowBackButtonComponent implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
