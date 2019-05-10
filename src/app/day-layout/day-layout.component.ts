import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-layout',
  templateUrl: './day-layout.component.html',
  styleUrls: ['./day-layout.component.sass']
})
export class DayLayoutComponent implements OnInit {
  hours = []
  startTime = 0 
  constructor() { 
    this.hours = [

    ]
  }

  ngOnInit() {
  }

}
