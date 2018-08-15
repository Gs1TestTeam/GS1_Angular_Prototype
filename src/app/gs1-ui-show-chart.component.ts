import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GS1GetGoogleAnaliticsService } from './gs1-get-google-analitics.service';
import { GS1UIShowChartIF } from './gs1-ui-components-classes/GS1UIShowChartIF';

@Component({
  selector: 'app-gs1-ui-show-chart',
  templateUrl: './gs1-ui-show-chart.component.html',
  styleUrls: ['./gs1-ui-show-chart.component.css']
})

export class GS1UiShowChartComponent implements OnInit, OnDestroy, GS1UIShowChartIF {

  private id: string;
  private paramSubScription: any;

  private googleData: any;
  private chartOptions: any;
  private chartData: Array<any>;
  private chartLabels: Array<string>; 
  private googleUrl: string;

  constructor(private actRouter: ActivatedRoute, private router: Router, private google: GS1GetGoogleAnaliticsService) { }

  ngOnInit() {
    this.paramSubScription = this.actRouter.params.subscribe(params => {
      this.id = params['id'];
    });

    this.google.setGoogleData(this.id);
    this.googleData = this.google.getGoogleData();
    this.chartOptions = this.googleData[0];
    this.chartData = this.googleData[1];
    this.chartLabels = this.googleData[2];
    this.googleUrl = this.googleData[3];
    this.chartTitle = this.chartTitle + " " + this.googleData[4];
  }

  ngOnDestroy() {
    this.paramSubScription.unsubscribe();
  }  

  // call Chart
  onChartClick(event) {
    this.router.navigate(['detail', this.id]);
  } 

  @Input() chartTitle: string;
  @Input() chartStyle: string;
  @Input() chartSize: Number;  
}