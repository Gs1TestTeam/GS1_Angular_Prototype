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

    this.gtag.event('search', {
                method: '1',
                event_category: this.searchName + ', ' + this.searchRank + ', ' + this.searchPoint,
                event_label: 'Link AdSense or Ad Exchange to your Analytics property.Get started Linking your AdSense or Ad Exchange and Google Analytics properties gives you access to metrics such as impressions, clicks, and revenue which you can add to your favorite analytics reports to get a better understanding of how well your pages or content is monetizing. Once you’ve linked your properties, you can use insights from Analytics to refine and optimize your AdSense or Ad Exchange ad units, improving the overall performance of your business.Linking properties requires a user who has Edit permission on the Analytics property and Administrator access on the Adsense or Ad Exchange account. Learn more abount linking AdSense or Ad Exchange'
                });


  }
}

/* 'report_id' : 1,
                event_category: this.searchName,
                'rank': this.searchRank,
				'points':this.searchPoint */
