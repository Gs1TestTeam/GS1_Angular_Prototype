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
  private id: string;
  private paramSubScription: any;
  private querySubScription: any;

  googleData: any;
  chartData: Array<any>;
  private chartLabels: Array<string>; 
  private chartTitle: string;

  label: string;
  value: Number;

  constructor(private actRouter: ActivatedRoute, private google: GS1GetGoogleAnaliticsService) { }

  ngOnInit() {
    this.paramSubScription = this.actRouter.params.subscribe(params => {
      this.id = params['id'];
    });
    this.querySubScription = this.actRouter.queryParams.subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.label = params['label'] || null;
        this.value = +params['value'] || 0;
    });
    // });

    this.google.setGoogleData(this.id);
    this.googleData = this.google.getGoogleData();
    this.chartData  = this.googleData[1];
    this.chartLabels= this.googleData[2];
    this.chartTitle = this.googleData[4];   
  }

  ngOnDestroy() {
    this.paramSubScription.unsubscribe();
    this.querySubScription.unsubscribe();
  }    
}