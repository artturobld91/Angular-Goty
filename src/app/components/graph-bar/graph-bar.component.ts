import { Component, OnDestroy, Input, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styleUrls: ['./graph-bar.component.css']
})

export class GraphBarComponent implements OnDestroy, OnChanges {

  @Input() results: any[] = []
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [''];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];
  // [
  //   { 
  //     data: [65], 
  //     label: 'Game 1' 
  //   },
  //   { 
  //     data: [28], 
  //     label: 'Game 2' 
  //   },
  //   { 
  //     data: [65], 
  //     label: 'Game 3' 
  //   },
  //   { 
  //     data: [28], 
  //     label: 'Game 4' 
  //   }
  // ];

  //interval:any;

  constructor() { 
    
    //this.interval = setInterval( () => {
      // barChartData = [];
      // console.log('tick')
      // for(let i=1; i <= 5; i++)
      // {   
      //     let dataTemp: number[] = new Array();
      //     dataTemp.push(Math.round(Math.random() * 500));
      //     let chartDataSets: ChartDataSets = {
      //       data: dataTemp,
      //       label: `Team ${i}`
      //     }
      //     this.barChartData.push(chartDataSets);
      // }
    //}, 1500);
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.results)
    this.barChartData = this.results.map( (res) => {
      return {
        data: [res.data],
        label: res.label
      }
    })
  }
  

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //clearInterval( this.interval );
  }

  // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public randomize(): void {
    // Only Change 3 values
  //   this.barChartData[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40 ];
  // }

}
