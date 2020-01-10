import { Component, OnInit, Input } from '@angular/core';

import { TagService } from '../tag.service';

@Component({
  selector: 'app-tag-rud',
  templateUrl: './tag-rud.component.html',
  styleUrls: ['./tag-rud.component.css']
})
export class TagRudComponent implements OnInit {
  deleted=false;
  @Input() tag: object;
  constructor(private tagService:TagService) { }

  remove_tag(){
    //TODO: Send a DELETE tag request
    this.tagService.remove_tag(this.tag['id']);
    this.deleted=true;
  }
  ngOnInit() {
  }

}
