import { Component, OnInit, Input } from '@angular/core';

import { TagService } from '../tag.service';

@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.css']
})
export class TagDisplayComponent implements OnInit {
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
