import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { constants } from '../constants';

import { TagService } from '../tag.service';




@Component({
  selector: 'app-tag-rud',
  templateUrl: './tag-rud.component.html',
  styleUrls: ['./tag-rud.component.css']
})
export class TagRudComponent implements OnInit {
  @Output() removeEvent = new EventEmitter<number>();
  @Input() index;
  // The "index" input is the array index of the tag used in the search page. 
  @Input() tag: object;
  @Input() read_only: boolean;

  icon_type: string;
  deleted = false;
  is_emotion_tag: boolean;
  emotion_color: string;

  constructor(private tagService: TagService) { }


  remove_tag() {
    if (this.tag['id']) {
      // for actual tags tagged to events
      this.tagService.remove_tag(this.tag['id']);
      this.deleted = true;
    }
    else if(this.index!=null){
      this.removeEvent.emit(this.index);
    }
  }
  ngOnInit() {
    this.icon_type = constants.TYPE_TO_ICON[this.tag['type'].toLowerCase()]

    if (this.icon_type == null) {
      // Covers the case where the type is not in "type_to_icon" dict
      this.icon_type = constants.TYPE_TO_ICON['custom'];
    }

    this.is_emotion_tag = this.tag['type'].toLowerCase() == 'emotion';
    this.emotion_color = constants.BASE_EMOTION_COLOR[constants.BOTTOM_LEVEL_EMOTIONS[this.tag['name'].toLowerCase()]];
    if (this.emotion_color == null) {
      this.emotion_color = 'beige';
    }
  }

}
