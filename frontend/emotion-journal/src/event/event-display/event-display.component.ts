import { Component, OnInit, Input } from '@angular/core';

import {
  NbWindowService,
  NbIconConfig,
  NbGlobalPhysicalPosition,
  NbToastrService
} from '@nebular/theme';


import { TagCreateComponent } from '../../tag/tag-create/tag-create.component';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';


@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  @Input() event: object;
  _editing = false;
  _textAreaStatus = 'basic';

  constructor(private windowService: NbWindowService, private toastrService: NbToastrService, private _hotkeysService: HotkeysService) {

    this._hotkeysService.add(new Hotkey('ctrl+alt+c', (event: KeyboardEvent): boolean => {
      // This adds a shortcut to "tagSelectedText()"
      this.tagSelectedText();
      return false; // Prevent bubbling
    }));
  }

  makeEditable() {
    this._editing = true;
  }

  saveLocalEvent() {
    this._textAreaStatus = 'danger';
    this._editing = false;
  }

  updateEvent() {
    // TODO, handle escape key to save text locally but, enter key to save both locally and update at server.
    // Also change the nbModel bind to a form control type bind.
    this.event['text'] = this.event['text'].replace('\n', '');
    console.log(this.event['text']);
    this._editing = false;
    this._textAreaStatus = 'basic';
  }

  tagSelectedText() {
    if (window.getSelection().rangeCount == 0) {
      return false;
    }
    let _selectionOptions = {
      'start_index': window.getSelection().getRangeAt(0).startOffset,
      'end_index': window.getSelection().getRangeAt(0).endOffset,
      'event_id': this.event['id']
    }


    if (_selectionOptions['start_index'] == _selectionOptions['end_index']) {

      const iconConfig: NbIconConfig = { icon: 'text-outline', pack: 'eva' };

      this.toastrService.show(
        'Please highlight some text to create a new event.',
        `No Highlight Found`, {
        preventDuplicates: true,
        // status: 'warning',
        position: NbGlobalPhysicalPosition.BOTTOM_LEFT, icon: iconConfig
      });
      return false;
    }

    const windowRef = this.windowService.open(TagCreateComponent, { title: 'New Tag', context: _selectionOptions });
  }

  suppressNewLine(event) {
    event.preventDefault();
  }

  ngOnInit() {
  }

}
