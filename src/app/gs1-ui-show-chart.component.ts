import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GS1GetGoogleAnaliticsService } from './gs1-get-google-analitics.service';
import { GS1UIShowChartIF } from './gs1-ui-components-classes/GS1UIShowChartIF';
import { Chart } from 'chart.js';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-gs1-ui-show-chart',
  templateUrl: './gs1-ui-show-chart.component.html',
  styleUrls: ['./gs1-ui-show-chart.component.css']
})

export class GS1UiShowChartComponent implements OnInit, OnDestroy, GS1UIShowChartIF, AfterViewInit {

  private id: string;
  private paramSubScription: any;

  private googleData: any;
  private chartOptions: any;
  private chartData: Array<any>;
  private chartLabels: Array<string>; 
  private googleUrl: string;
  chart: any;
  @ViewChild('myChart') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor(private gtag: Gtag, private actRouter: ActivatedRoute, private router: Router, private google: GS1GetGoogleAnaliticsService) { }

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
  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.onInitial();
  }
  // // call Chart
  onChartClick(event) {


    var activePoints = this.chart.getElementsAtEvent(event);

    if (activePoints[0]) {
      var chartData = activePoints[0]['_chart'].config.data;
      var idx = activePoints[0]['_index'];

      var label = chartData.labels[idx];
      var value = chartData.datasets[0].data[idx];

      this.gtag.event('login', {
        method: 'Instagram',
        event_category: label,
        event_label: 'New user logged in via OAuth'
      });


      //var url = "http://example.com/?label=" + label + "&value=" + value;
      //console.log(url);
    }
    this.router.navigate(['/detail/' + this.id], { queryParams: { label: label,  value:value} });
  } 

 
  onInitial(): void {




       const ctx = this.context;

      console.log(ctx);      
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: this.chartLabels,
            datasets: [{
                label: this.chartData[0].label,
                data: this.chartData[0].data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        events: ['click']
    });
  }

  @Input() chartTitle: string;
  @Input() chartStyle: string;
  @Input() chartSize: Number;  
}