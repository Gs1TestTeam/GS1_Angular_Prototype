import { Component, OnInit, Input } from '@angular/core';
import { GS1UIShowLogoIF } from './gs1-ui-components-classes/GS1UIShowLogoIF';

@Component({
  selector: 'app-gs1-ui-show-logo',
  templateUrl: './gs1-ui-show-logo.component.html',
  styleUrls: ['./gs1-ui-show-logo.component.css']
})
export class GS1UiShowLogoComponent implements OnInit, GS1UIShowLogoIF {

  constructor() { }

  ngOnInit() {
  }

  @Input("logoW") logoWidth: Number;
  @Input("logoH") logoHeight: Number;
  @Input("logoS1") logoSlogan1: String;
  @Input("logoS2") logoSlogan2: String;
}
