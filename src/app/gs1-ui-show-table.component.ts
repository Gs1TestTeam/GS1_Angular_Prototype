import { Component, OnInit, Input } from '@angular/core';
import { GS1UIShowTableIF } from './gs1-ui-components-classes/GS1UIShowTableIF';
import { Gs1GetRecordListServiceService } from './gs1-get-record-list-service.service';
import { Record } from './Record';

@Component({
  selector: 'app-gs1-ui-show-table',
  templateUrl: './gs1-ui-show-table.component.html',
  styleUrls: ['./gs1-ui-show-table.component.css']
})
export class GS1UiShowTableComponent implements OnInit, GS1UIShowTableIF {
  recordList: Record[];

  searchName: string;
  searchRank: string;
  searchPoint: string;

  constructor( recordListService: Gs1GetRecordListServiceService ) {
    this.recordList = recordListService.getRecordList(); 
  }

  ngOnInit() {
  }



  @Input() Col1Title: string;
  @Input() Col2: string;
  @Input() fieldData: Array<string>;
  @Input() Col3: string;
  @Input() labelData: Array<string>;
}
