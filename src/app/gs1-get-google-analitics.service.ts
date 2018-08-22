import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GS1GetGoogleAnaliticsService {

  chartOptions: any;
  chartData: Array<any>;
  chartLabels: Array<string>; 
  googleUrl: string;
  chartTitle: string;

  constructor() { }

  getGoogleData(): any {
    return [ this.chartOptions, this.chartData, this.chartLabels, this.googleUrl, this.chartTitle ];
  }

  setGoogleData(id: string): void {

    if(id === '1') {
      // DBMS Chart
      this.chartOptions = {
        responsive: true
        };

      this.chartData = [
        { data: [1312, 1206, 1072, 417, 350, 181, 138], label: 'Comparision A' },
      ];

      this.chartLabels = ['Oracle 11g', 'MySql', 'MS SQL', 'PostgreSQL', 'MongoDB', 'DB2', 'Redis'];

      this.googleUrl = 'https://db-engines.com/en/ranking';

      this.chartTitle = '(DBMS)';
    }
    else
    {
      // PL Chart
      this.chartOptions = {
        responsive: true
      };

      this.chartData = [
        { data: [13.27, 10.16, 4.72, 3.78, 2.82, 2.47, 2.47], label: 'Comparision B' },
      ];

      this.chartLabels = ['Java', 'C', 'C++', 'Python', 'C#', 'JavaScript', 'VB .NET'];

      this.googleUrl = 'https://stackify.com/popular-programming-languages-2018/?utm_referrer=https%3A%2F%2Fwww.google.ca%2F';

      this.chartTitle = '(Programming Language)';
    }
  }
}
