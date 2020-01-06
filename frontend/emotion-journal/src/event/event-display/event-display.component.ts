import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  @Input() event: object;
  _editing=false;

  constructor() { }

  makeEditable(){
    this._editing=true;
  }

  updateEvent(){
    this.event['text']=this.event['text'].replace('\n','');
    console.log(this.event['text']);
    this._editing=false;
  }

  suppressNewLine(event){
    event.preventDefault();
  }

  ngOnInit() {
  }

}
