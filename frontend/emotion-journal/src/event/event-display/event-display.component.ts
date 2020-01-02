import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  @Input() event: object;

  constructor() { }

  remove_tag(tag) {
    const index = this.event['tags'].indexOf(tag);
    this.event['tags'].splice(index, 1);
  }
  ngOnInit() {
  }

}
