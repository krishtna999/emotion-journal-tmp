import { Component, OnInit, Input, SimpleChanges, ViewChild } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { PieChartComponent, PieGridComponent } from '@swimlane/ngx-charts';
import { MatDialog } from '@angular/material';
import { EventSearchComponent } from 'src/event/event-search/event-search.component';

@Component({
  selector: 'app-type-analytics',
  templateUrl: './type-analytics.component.html',
  styleUrls: ['./type-analytics.component.css']
})
export class TypeAnalyticsComponent implements OnInit {
  @ViewChild(PieChartComponent, { static: false }) pieChart: PieChartComponent;


  @Input() read_only: boolean;
  @Input() searchParams: object;

  type_ratio: any[];

  view: any[] = [600, 400];
  grid_view: any[] = [400, 250];
  showLabels: boolean = true;
  gradient: boolean = true;

  // colorScheme = "flame";


  constructor(private analyticsService: AnalyticsService, private dialog: MatDialog) { }

  onSelect(event) {
    var temp_params = Object.assign({}, this.searchParams);
    // temp_params is a temporary copy of searchParams
    temp_params['tags'] = this.searchParams['tags'].concat(
      [{
      'type': this.searchParams['primary_type'],
      'name': event['name'],
      }]
    );
    temp_params['read_only']=this.read_only;
    this.dialog.open(EventSearchComponent, { data: temp_params });
  }
  renderGraph() {
    // Object.assign(this, { single });
  }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.searchParams);
    if (this.searchParams) {
      this.analyticsService.type_ratio(this.searchParams['primary_type'])
        .subscribe(
          data => {
            this.type_ratio = data;

          }
        );
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // Reducing the space that margins of the chart/grid.
      this.pieChart.margins = [0, 0, 0, 0];
      this.pieChart.update();
    }, 0);
  }
}
