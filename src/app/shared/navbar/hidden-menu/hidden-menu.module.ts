import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiddenMenuComponent } from './hidden-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HiddenMenuComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HiddenMenuComponent]
})
export class HiddenMenuModule { }
