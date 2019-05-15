import { Component, OnInit, HostListener } from '@angular/core';
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
  // x: number;
  // y: number;
  // px: number;
  // py: number;
  // width: number;
  // height: number;
  // minArea: number;
  // draggingCorner: boolean;
  // draggingWindow: boolean;
  // resizer: Function;
  top: number
  bottom: number
  height: number
  width: number

  constructor() { 
    // this.x = 300;
    // this.y = 100;
    // this.px = 0;
    // this.py = 0;
    // this.width = 100;
    // this.height = 16; 
    // this.draggingCorner = false;
    // this.draggingWindow = false;
    // this.minArea = 20000
   }
  
  ngOnInit() {
  }
  
  startCreateElement(task: HTMLButtonElement) {
    (this.form.get('tasks') as FormArray).push(new FormControl(task))
  }

  onResizeEnd(event: ResizeEvent): void {
    this.top = event.rectangle.top
    this.bottom = event.rectangle.bottom
    this.height = event.rectangle.height

    console.dir(EventTarget);
    console.log('Element was resized', event);
  }

  
  // testClick(){
  //   console.log(event)
  // }

  // area() {
  //   return this.width * this.height;
  // }

  // onWindowPress(event: MouseEvent) {
  //   this.draggingWindow = true;
  //   this.px = event.clientX;
  //   this.py = event.clientY;
  // }

  // onWindowDrag(event: MouseEvent) {
  //    if (!this.draggingWindow) {
  //       return;
  //   }
  //   let offsetX = event.clientX - this.px;
  //   let offsetY = event.clientY - this.py;

  //   this.x += offsetX;
  //   this.y += offsetY;
  //   this.px = event.clientX;
  //   this.py = event.clientY;
  // }

  // topLeftResize(offsetX: number, offsetY: number) {
  //   this.x += offsetX;
  //   this.y += offsetY;
  //   this.width -= offsetX;
  //   this.height -= offsetY;
  // }

  // topRightResize(offsetX: number, offsetY: number) {
  //   this.y += offsetY;
  //   this.width += offsetX;
  //   this.height -= offsetY;
  // }

  // bottomLeftResize(offsetX: number, offsetY: number) {
  //   this.x += offsetX;
  //   this.width -= offsetX;
  //   this.height += offsetY;
  // }

  // bottomRightResize(offsetX: number, offsetY: number) {
  //   this.width += offsetX;
  //   this.height += offsetY;
  // }

  // onCornerClick(event: MouseEvent, resizer?: Function) {
  //   this.draggingCorner = true;
  //   this.px = event.clientX;
  //   this.py = event.clientY;
  //   this.resizer = resizer;
  //   event.preventDefault();
  //   event.stopPropagation();
  // }

  // @HostListener('document:mousemove', ['$event'])
  // onCornerMove(event: MouseEvent) {
  //   if (!this.draggingCorner) {
  //       return;
  //   }
  //   let offsetX = event.clientX - this.px;
  //   let offsetY = event.clientY - this.py;

  //   let lastX = this.x;
  //   let lastY = this.y;
  //   let pWidth = this.width;
  //   let pHeight = this.height;

  //   this.resizer(offsetX, offsetY);
  //   if (this.area() < this.minArea) {
  //       this.x = lastX;
  //       this.y = lastY;
  //       this.width = pWidth;
  //       this.height = pHeight;
  //   }
  //   this.px = event.clientX;
  //   this.py = event.clientY;
  // }

  // @HostListener('document:mouseup', ['$event'])
  // onCornerRelease(event: MouseEvent) {
  //   this.draggingWindow = false;
  //   this.draggingCorner = false;
  // }

}

