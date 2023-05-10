import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomFactComponent } from './random-fact.component';



@NgModule({
  declarations: [RandomFactComponent],
  imports: [
    CommonModule
  ],
  exports : [RandomFactComponent]
})
export class RandomFactModule { }
