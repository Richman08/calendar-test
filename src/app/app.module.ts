import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ResizableModule } from 'angular-resizable-element';

import { AppComponent } from './app.component';
import { MatComponentsModule } from './mat-components.module';
import { DayLayoutComponent } from './day-layout/day-layout.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { StopPropagationDirective } from './stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    DayLayoutComponent,
    CreateTaskComponent,
    StopPropagationDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule,
    DragDropModule,
    ResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
