import { Component, OnInit, Input } from '@angular/core';

import { constants } from './constants';

import { TagService } from '../tag.service';




@Component({
  selector: 'app-tag-rud',
  templateUrl: './tag-rud.component.html',
  styleUrls: ['./tag-rud.component.css']
})
export class TagRudComponent implements OnInit {
  icon_type:string;
  deleted=false;
  is_emotion_tag:boolean;
  emotion_color:string;
  @Input() tag: object;

  constructor(private tagService:TagService) { }


  remove_tag(){
    //TODO: Send a DELETE tag request
    this.tagService.remove_tag(this.tag['id']);
    this.deleted=true;
  }
  ngOnInit() {
    this.icon_type=constants.TYPE_TO_ICON[this.tag['type'].toLowerCase()]
    
    if(this.icon_type==null){
      // Covers the case where the type is not in "type_to_icon" dict
      this.icon_type=constants.TYPE_TO_ICON['custom'];
    }
    
    this.is_emotion_tag=this.tag['type'].toLowerCase()=='emotion';
    this.emotion_color=constants.BASE_EMOTION_COLOR[constants.BOTTOM_LEVEL_EMOTIONS[this.tag['name'].toLowerCase()]];    
    if(this.emotion_color==null){
      this.emotion_color='beige';
    }
  }

}
