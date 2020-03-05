import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-by-date',
  templateUrl: './diary-by-date.component.html',
  styleUrls: ['./diary-by-date.component.css']
})
export class DiaryByDateComponent implements OnInit {
  selected_date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
