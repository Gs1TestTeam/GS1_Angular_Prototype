import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gs1-ui-show-header',
  templateUrl: './gs1-ui-show-header.component.html',
  styleUrls: ['./gs1-ui-show-header.component.css']
})
export class GS1UiShowHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input("logoW") logoW: Number;
  @Input("logoH") logoH: Number;
  @Input("logoS1") logoS1: String;
  @Input("logoS2") logoS2: String;

  @Input("displayN") displayN: Array<string>;
  @Input("gUrl") gUrl: Array<string>; 
}
