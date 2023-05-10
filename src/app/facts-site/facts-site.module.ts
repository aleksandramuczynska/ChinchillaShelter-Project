import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { RandomFactModule } from './random-fact/random-fact.module';
import { FactsSiteComponent } from './facts-site.component';



@NgModule({
  declarations: [FactsSiteComponent],
  imports: [
    CommonModule, NavbarModule, FooterModule, RandomFactModule
  ],
  exports : [FactsSiteComponent]
})
export class FactsSiteModule { }
