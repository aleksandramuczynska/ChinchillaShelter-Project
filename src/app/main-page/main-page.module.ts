import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { MainPageComponent } from './main-page.component';
import { FooterModule } from '../shared/footer/footer.module';
import { BackgroundBaseModule } from './background-base/background-base.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, NavbarModule,  FooterModule, BackgroundBaseModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
