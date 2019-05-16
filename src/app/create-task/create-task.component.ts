import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ResizeEvent } from 'angular-resizable-element';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.sass']
})
export class CreateTaskComponent implements OnInit {

  form = new FormGroup ({
    tasks: new FormArray([])
  })

  top: number
  height: number
  event: MouseEvent
  startTaskCoordinates: number
  offset: number
  // startPointTime: any
  // minute: number
  
  constructor() { 
    this.height = 0
    this.startTaskCoordinates = 0
    // this.startPointTime = 0
    // this.minute = new Date().setMinutes()
  }
  
  ngOnInit() {
  }
  
  createTask(event, task: HTMLButtonElement) {
    (this.form.get('tasks') as FormArray).push(new FormControl(task))
    this.startTaskCoordinates = event.layerY
    this.offset = event.clientY - event.offsetY
    

    // console.log(this.minute)
  }
  
  
  onResizeEnd(event: ResizeEvent): void {
    this.top = event.rectangle.top - this.offset
    this.height = event.rectangle.height
    
    console.log('Element was resized', event);
  }

  // coordinates(event) {
  //   this.clientY = event.clientY
  //   // console.log(this.clientY)
  // }

}

