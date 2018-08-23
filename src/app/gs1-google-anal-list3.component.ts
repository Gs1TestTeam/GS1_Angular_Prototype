import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../assets/js/canvasjs.min';

@Component({
  selector: 'app-gs1-google-anal-list3',
  templateUrl: './gs1-google-anal-list3.component.html',
  styleUrls: ['./gs1-google-anal-list3.component.css']
})
export class Gs1GoogleAnalList3Component implements OnInit {

  pageTitle: string = 'GS1 Google Analytics List3';

  constructor() { }

  ngOnInit() {
      const chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: 'Basic Pie Chart in Angular'
        },
        data: [{
          type: 'pie',
          dataPoints: [
            { y: 1312, label: 'Oracle' },
            { y: 1208, label: 'MySQL' },
            { y: 1076, label: 'MS SQL' },
            { y: 876, label: 'MongoDB' },
            { y: 656, label: 'PostgreSQL' }
          ],
          click: onClick,
        }]
      });

      chart.render();

      function onClick(e) {
        alert(  e.dataSeries.type + '[, dataPoint { x:'
                + e.dataPoint.label + ', Value: '
                + e.dataPoint.y + ' }' );
        if ( e.dataPoint.label === 'Oracle') {
          window.open('https://en.wikipedia.org/wiki/Oracle_Database', '_blank');
        } else if ( e.dataPoint.label === 'MySQL') {
          window.open('https://en.wikipedia.org/wiki/MySQL', '_blank');
        } else if ( e.dataPoint.label === 'MS SQL') {
          window.open('https://en.wikipedia.org/wiki/Microsoft_SQL_Server', '_blank');
        } else if ( e.dataPoint.label === 'MongoDB') {
          window.open('https://en.wikipedia.org/wiki/MongoDB', '_blank');
        } else {
          window.open('https://en.wikipedia.org/wiki/PostgreSQL', '_blank');
        }

      }
  }
}
