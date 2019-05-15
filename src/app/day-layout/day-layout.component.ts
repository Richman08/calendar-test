import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-layout',
  templateUrl: './day-layout.component.html',
  styleUrls: ['./day-layout.component.sass']
})
export class DayLayoutComponent implements OnInit {
  hours = [8,9,10,11,12,1,2,3,4,]
  
  constructor() { }

  ngOnInit() {
  }
 
}
