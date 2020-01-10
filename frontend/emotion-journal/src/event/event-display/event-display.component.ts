import { Component, OnInit, Input } from '@angular/core';

import {
  NbWindowService,
  NbIconConfig,
  NbGlobalPhysicalPosition,
  NbToastrService
} from '@nebular/theme';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';


import { EventService } from '../event.service';

import { TagCreateComponent } from '../../tag/tag-create/tag-create.component';
import { EntryService } from '../../entry/entry.service';


@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  @Input() event: object;
  _editing = false;
  _textAreaStatus = 'basic';

  constructor(private windowService: NbWindowService, private toastrService: NbToastrService, private _hotkeysService: HotkeysService, private eventService: EventService) {

    this._hotkeysService.add(new Hotkey('ctrl+alt+c', (event: KeyboardEvent): boolean => {
      // This adds a shortcut to "tagSelectedText()"
      this.tagSelectedText(null);
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
    // Also change the nbModel bind to a form control type bind.
    this.event['text'] = this.event['text'].replace('\n', '');
    console.log(this.event['text']);
    this.eventService.update_event(this.event['id'], this.event['text'])
    this._editing = false;
    this._textAreaStatus = 'basic';
  }

  tagSelectedText(event_id) {
    const selectedText = window.getSelection();

    if (selectedText.rangeCount == 0) {
      return false;
    }

    // data-evid => evid = EventId
    const selected_event_id = selectedText.anchorNode.parentElement.getAttribute('data-evid');

    // IF1: If the selected text belongs to the event component where the button was clicked
    // IF2: If the function was triggered via a shortcut
    if ((event_id != null && selected_event_id != null && selected_event_id == event_id)
      ||
      (event_id == null && selected_event_id != null)
    ) {

      let _selectionOptions = {
        'start_index': selectedText.getRangeAt(0).startOffset,
        'end_index': selectedText.getRangeAt(0).endOffset,
        'event_id': parseInt(selected_event_id),
      }
      console.log(selected_event_id);
      const windowRef = this.windowService.open(TagCreateComponent, { title: 'New Tag', context: _selectionOptions });
    }
    else if (selected_event_id != event_id && selectedText.getRangeAt(0).startOffset == selectedText.getRangeAt(0).endOffset) {
      let _selectionOptions = {
        'start_index': selectedText.getRangeAt(0).startOffset,
        'end_index': selectedText.getRangeAt(0).endOffset,
        'event_id': event_id,
      }
      console.log(selected_event_id);

      const windowRef = this.windowService.open(TagCreateComponent, { title: 'New Tag', context: _selectionOptions });
    }

    // Else only gets triggered if the text selected did not belong to the event whose add tag button was clicked (or it didn't belong to any event)
    else {
      const iconConfig: NbIconConfig = { icon: 'text-outline', pack: 'eva' };

      this.toastrService.show(
        'Please highlight text belonging to the appropriate event',
        `Bad Highlight Found`, {
        preventDuplicates: true,
        // status: 'warning',
        position: NbGlobalPhysicalPosition.BOTTOM_LEFT, icon: iconConfig
      });
      return false;
    }

  }

  suppressNewLine(event) {
    event.preventDefault();
  }

  ngOnInit() {
  }

}
