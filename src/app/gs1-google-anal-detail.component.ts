import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GS1GetGoogleAnaliticsService } from './gs1-get-google-analitics.service';

@Component({
  selector: 'app-gs1-google-anal-detail',
  templateUrl: './gs1-google-anal-detail.component.html',
  styleUrls: ['./gs1-google-anal-detail.component.css']
})
export class Gs1GoogleAnalDetailComponent implements OnInit {
  pageTitle: string = "GS1 Google Analytics Detail";//added by Olga
   id: string;
   paramSubScription: any;

   googleData: any;
   chartData: Array<any>;
   chartLabels: Array<string>;
   chartTitle: string;

  constructor(private actRouter: ActivatedRoute, private google: GS1GetGoogleAnaliticsService) { }

  ngOnInit() {
    this.paramSubScription = this.actRouter.params.subscribe(params => {
      this.id = params['id'];
    });

    this.google.setGoogleData(this.id);
    this.googleData = this.google.getGoogleData();
    this.chartData  = this.googleData[1];
    this.chartLabels = this.googleData[2];
    this.chartTitle = this.googleData[4];
  }

  ngOnDestroy() {
    this.paramSubScription.unsubscribe();
  }
}
