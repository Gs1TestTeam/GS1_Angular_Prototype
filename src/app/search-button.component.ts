import { Component, OnInit, Input } from '@angular/core';
import { Record } from './Record';
import { isNullOrUndefined } from 'util';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit {
  @Input() searchName: string;
  @Input() searchRank: string;
  @Input() searchPoint: string;
  @Input() recordList: Record[];

  recordsFound: Record[];

  constructor( private gtag: Gtag ) { }

  ngOnInit() {
    this.recordsFound=this.recordList;
  }

  searchNow(event: any): void {

    if( isNullOrUndefined(this.searchName) ){
        this.searchName='';
    }
    if( isNullOrUndefined(this.searchRank) ){
      this.searchRank='';
    }
    if( isNullOrUndefined(this.searchPoint) ){
      this.searchPoint='';
    }

    this.recordsFound = this.recordList.filter(
        e => e.name.indexOf(this.searchName) !== -1
          && e.rank.indexOf(this.searchRank) !== -1
          && e.point.indexOf(this.searchPoint) !== -1
        );

    alert(' creating GTAG with  ' + this.searchName + ', ' + this.searchRank + ', ' + this.searchPoint);

    this.gtag.event('login', {
                method: '1',
                event_category: this.searchName,
                event_label: 'New user logged in via OAuth'
                });


  }
}

/* 'report_id' : 1,
                event_category: this.searchName,
                'rank': this.searchRank,
				'points':this.searchPoint */
