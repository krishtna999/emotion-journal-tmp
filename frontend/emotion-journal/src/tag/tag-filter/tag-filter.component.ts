import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TagCreateComponent } from '../tag-create/tag-create.component';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnInit {

  @Output() tagsChange = new EventEmitter<Array<object>>();

  tags = new Array<object>();
  constructor(private dialog: MatDialog) { }

  addTagFilter() {
    const dialogRef = this.dialog.open(TagCreateComponent);
    dialogRef.afterClosed()
      .subscribe(
        data => {
          if (data != null){
            this.tags.push(Object(data));
            this.tagsChange.emit(this.tags);
          }
        }
      );

  }

  removeEventHandler($event: number) {
    this.tags.splice($event, 1);
    this.tagsChange.emit(this.tags);
  }

  ngOnInit() {
  }

}
