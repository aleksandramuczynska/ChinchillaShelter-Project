import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundBaseComponent } from './background-base.component';
import { IntroModule } from './intro/intro.module';
import { OurChinchillasModule } from './our-chinchillas/our-chinchillas.module';
import { AppFormsModule } from './forms/app_forms.module';



@NgModule({
  declarations: [BackgroundBaseComponent],
  imports: [
    CommonModule, IntroModule, OurChinchillasModule, AppFormsModule
  ],
  exports : [BackgroundBaseComponent]
})
export class BackgroundBaseModule { }
