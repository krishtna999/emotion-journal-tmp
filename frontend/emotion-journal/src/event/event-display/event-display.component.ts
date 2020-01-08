import { Component, OnInit, Input } from '@angular/core';

import { NbWindowService } from '@nebular/theme';

import { TagCreateComponent } from '../../tag/tag-create/tag-create.component';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  @Input() event: object;
  _editing = false;

  constructor(private windowService: NbWindowService) { }

  makeEditable() {
    this._editing = true;
  }

  updateEvent() {
    // TODO, handle escape key to save text locally but, enter key to save both locally and update at server.
    // Also change the nbModel bind to a form control type bind.
    this.event['text'] = this.event['text'].replace('\n', '');
    console.log(this.event['text']);
    this._editing = false;
  }

  tagSelectedText() {
    if (window.getSelection().rangeCount == 0) {
      return false;
    }
    // TODO: Call tag window from here on.
    let _selectionOptions = {
      'start_index': window.getSelection().getRangeAt(0).startOffset,
      'end_index': window.getSelection().getRangeAt(0).endOffset,
      'event_id':this.event['id']
    }

    
    
    
    
    if (_selectionOptions['start_index'] == _selectionOptions['end_index']) {
      // TODO: Write code to show a toastr that asks the user to select some text
      return false;
    }
    
    const windowRef = this.windowService.open(TagCreateComponent, { title:'New Tag',context: _selectionOptions});
  }

  suppressNewLine(event) {
    event.preventDefault();
  }

  ngOnInit() {
  }

}
