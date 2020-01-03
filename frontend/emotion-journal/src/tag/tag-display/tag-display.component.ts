import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.css']
})
export class TagDisplayComponent implements OnInit {
  deleted=false;
  @Input() tag: object;
  constructor() { }

  remove_tag(){
    //TODO: Send a DELETE tag request
    
    this.deleted=true;
  }
  ngOnInit() {
  }

}
