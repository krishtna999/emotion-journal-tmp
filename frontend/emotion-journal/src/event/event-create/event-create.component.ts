import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  text:string;
  _textAreaStatus = 'basic';

  constructor() {
  }


  saveLocalEvent() {
    this._textAreaStatus = 'danger';
  }

  // When we create a new Entry, we also create a new Event along with it.
  createEntry() {
    this._textAreaStatus = 'basic';
    console.log(this.text);
  }

  suppressNewLine(event) {
    event.preventDefault();
  }

  ngOnInit() {
  }
}
