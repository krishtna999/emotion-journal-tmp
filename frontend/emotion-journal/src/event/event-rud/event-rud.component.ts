import { Component, OnInit, Input } from '@angular/core';

import {  NbToastrService } from '@nebular/theme';
import { MatDialog } from '@angular/material/dialog';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';


import { EventService } from '../event.service';

import { TagCreateComponent } from '../../tag/tag-create/tag-create.component';


@Component({
  selector: 'app-event-rud',
  templateUrl: './event-rud.component.html',
  styleUrls: ['./event-rud.component.css']
})
export class EventRudComponent implements OnInit {
  @Input() event: object;
  @Input() read_only: boolean;
  _editing = false;
  _textAreaStatus = 'basic';

  constructor(
    private dialog: MatDialog,
    private toastrService: NbToastrService,
    private _hotkeysService: HotkeysService,
    private eventService: EventService) {

    this._hotkeysService.add(new Hotkey('ctrl+alt+c', (event: KeyboardEvent): boolean => {
      // This adds a shortcut to "tagSelectedText()"
      this.tagSelectedText(null);
      return false; // Prevent bubbling
    }));
  }

  makeEditable() {
    this._editing = true && !this.read_only;
  }

  saveEventLocally() {
    this._textAreaStatus = 'danger';
    this._editing = false;
  }

  updateEvent() {
    // Also change the nbModel bind to a form control type bind.
    this.event['text'] = this.event['text'].replace('\n', '');
    this.eventService.update_event(this.event['id'], this.event['text'])
    this._editing = false;
    this._textAreaStatus = 'basic';
  }

  tagSelectedText(event_id) {
    const selectedText = window.getSelection();

    var selected_event_id=null;
    
    if (selectedText.anchorNode) {
      // data-evid => evid = EventId
      selected_event_id = selectedText.anchorNode.parentElement.getAttribute('data-evid');
    }

    // Condition1: If the selected text belongs to the event component where the button was clicked
    // Condition2: If the function was triggered via a shortcut
    if ((event_id != null && selected_event_id != null && selected_event_id == event_id)
      ||
      (event_id == null && selected_event_id != null)
    ) {

      let _selectionOptions = {
        'start_index': selectedText.getRangeAt(0).startOffset,
        'end_index': selectedText.getRangeAt(0).endOffset,
        'event': this.event,
      }
      const windowRef = this.dialog.open(TagCreateComponent, { data: _selectionOptions });
    }
    else if (
      (selected_event_id==null
        ||
      selected_event_id != event_id && selectedText.getRangeAt(0).startOffset == selectedText.getRangeAt(0).endOffset
      )
    ) {
      let _selectionOptions = {
        'event': this.event,
      }
      const windowRef = this.dialog.open(TagCreateComponent, { data: _selectionOptions });
    }

    // Else only gets triggered if the text selected did not belong to the event whose add tag button was clicked (or it didn't belong to any event)
    else {
      this.toastrService.show(
        'Please highlight text belonging to the appropriate event',
        'Bad Highlight');
      return false;
    }

  }

  suppressNewLine(event) {
    event.preventDefault();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.dialog.closeAll();
  }

}
