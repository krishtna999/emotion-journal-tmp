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
  @Input() is_bar_chart: boolean;


  type_ratio = new Array<any>();

  chart_props;


  // colorScheme = "flame";


  constructor(private analyticsService: AnalyticsService, private dialog: MatDialog) { }

  onSelect(event) {
    var temp_params = Object.assign({}, this.searchParams);
    // temp_params is a temporary copy of searchParams
    temp_params['tags'] = this.searchParams['tags'].concat(
      [{
        'type': this.searchParams['primary_tag_type'],
        'name': event['name'],
      }]
    );
    temp_params['read_only'] = this.read_only;
    this.dialog.open(EventSearchComponent, { data: temp_params });
  }

  setChartProperties() {
    this.chart_props = {
      bar: {
        'view': [1000, 400],
        'showXAxis': true,
        'showYAxis': true,
        'showLegend': true,
        'showXAxisLabel': true,
        'showYAxisLabel': true,
        'yAxisLabel': 'Count',
      },
      pie: {
        view: [500, 400],
        grid_view: [500, 500],
        showLabels: true,
        gradient: true,
      }
    }
    if (this.searchParams) {
      this.chart_props.bar.xAxisLabel = this.searchParams['primary_tag_type'];
      if (this.searchParams['tags'].length > 0) {
        this.chart_props.bar.yAxisLabel =
          this.searchParams['tags'][0]['name']
          +
          ' count';
      }
      else {
        this.chart_props.yAxisLabel = 'Count';
      };
    }
  }


  ngOnInit() {
    this.setChartProperties();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchParams) {
      this.setChartProperties();
      this.analyticsService.get_type_ratio(this.searchParams)
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
