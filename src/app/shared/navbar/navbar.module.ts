import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { HiddenMenuModule } from './hidden-menu/hidden-menu.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule, HiddenMenuModule, RouterModule
  ],
  declarations: [NavbarComponent],
  exports : [NavbarComponent]
})
export class NavbarModule { }
