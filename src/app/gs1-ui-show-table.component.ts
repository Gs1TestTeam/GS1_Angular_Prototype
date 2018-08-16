import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gs1-ui-show-table',
  templateUrl: './gs1-ui-show-table.component.html',
  styleUrls: ['./gs1-ui-show-table.component.css']
})
export class GS1UiShowTableComponent implements OnInit, GS1UIComponentsIF {

  constructor() { }

  ngOnInit() {
  }
  @Input() Col1Title: string;
  @Input() Col2: string;
  @Input() fieldData: Array<string>;
  @Input() Col3: string;
  @Input() labelData: Array<string>;
}
