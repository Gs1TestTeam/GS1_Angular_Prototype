import { Component, OnInit, Input } from '@angular/core';
import {GS1UIShowTableIF} from './gs1-ui-components-classes/GS1UIShowTableIF';
@Component({
  selector: 'app-gs1-ui-show-table',
  templateUrl: './gs1-ui-show-table.component.html',
  styleUrls: ['./gs1-ui-show-table.component.css']
})
export class GS1UiShowTableComponent implements OnInit, GS1UIShowTableIF {

  constructor() { }

  ngOnInit() {
  }
  @Input() Col1Title: string;
  @Input() Col2: string;
  @Input() fieldData: Array<string>;
  @Input() Col3: string;
  @Input() labelData: Array<string>;
}
