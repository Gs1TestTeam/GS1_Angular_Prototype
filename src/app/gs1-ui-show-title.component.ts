/********************************************************************************* 
 * Project: GS1 Canada Angular Prototype
 * File: gs1-ui-show-title.component.ts
 * gets a title from eclosing container, adds it to page and formats it.
 * 
 * Created by Olga Arsenieva
 * Date: 2018.08.16
 * 
********************************************************************************/  

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-gs1-ui-show-title',
  templateUrl: './gs1-ui-show-title.component.html',
  styleUrls: ['./gs1-ui-show-title.component.css']
})
export class Gs1UiShowTitleComponent implements OnInit {
  
  @Input() pageTitle:string;

  constructor(  ) { }

  ngOnInit() {
   
  }

}
