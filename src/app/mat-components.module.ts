import { NgModule } from '@angular/core';

import { MatButtonModule, MatGridListModule, MatDialogModule } from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatGridListModule,
        MatDialogModule   
    ]
})
export class MatComponentsModule { }