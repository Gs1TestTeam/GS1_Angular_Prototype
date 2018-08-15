import { Component, OnInit, Input} from '@angular/core';
import {GS1UIShowNavigationIF} from './gs1-ui-components-classes/GS1UIShowNavigationIF';

@Component({
  selector: 'app-gs1-ui-show-navigation',
  templateUrl: './gs1-ui-show-navigation.component.html',
  styleUrls: ['./gs1-ui-show-navigation.component.css']
})
export class GS1UiShowNavigationComponent implements OnInit, GS1UIShowNavigationIF {

  constructor() { }

  ngOnInit() {
  }
  @Input("displayN") displayNames: Array<string>;
  @Input("gUrl") goUrls: Array<string>;
}