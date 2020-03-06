import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-type-analytics',
  templateUrl: './type-analytics.component.html',
  styleUrls: ['./type-analytics.component.css']
})
export class TypeAnalyticsComponent implements OnInit {
  @Input() read_only: boolean;
  @Input() searchParams: object;

  type_ratio: any[];

  view: any[] = [600, 400];
  grid_view: any[] = [350, 200];
  showLabels: boolean = true;
  gradient: boolean = true;

  // colorScheme = "flame";


  constructor(private analyticsService: AnalyticsService) { }

  onSelect(event) {
    console.log(event);
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
}
