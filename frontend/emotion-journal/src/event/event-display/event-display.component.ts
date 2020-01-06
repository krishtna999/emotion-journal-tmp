import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  @Input() event: object;
  _editing = false;

  constructor() { }

  makeEditable() {
    this._editing = true;
  }

  updateEvent() {
    // TODO, handle escape key to save text locally but, enter key to save both locally and update at server.
    this.event['text'] = this.event['text'].replace('\n', '');
    console.log(this.event['text']);
    this._editing = false;
  }

  tagSelectedText() {
    if (window.getSelection().rangeCount == 0) {
      return false;
    }
    let _selectedText = {
      // TODO: Call tag window from here on.
      'start_index': window.getSelection().getRangeAt(0).startOffset,
      'end': window.getSelection().getRangeAt(0).endOffset,
      'event_id':this.event['id']
    }

    if (_selectedText['start'] == _selectedText['end']) {
      // TODO: Write code to show a toastr that asks the user to select some text
      return false;
    }
    console.log(_selectedText);

  }

  suppressNewLine(event) {
    event.preventDefault();
  }

  ngOnInit() {
  }

}
