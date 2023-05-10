import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleChinchillaComponent } from './single-chinchilla.component';
import { ChinchillasService } from 'src/app/core/services/chinchillas.service';
import { ChillaDetailsModule } from './chilla-details/chilla-details.module';



@NgModule({
  declarations: [SingleChinchillaComponent],
  imports: [
    CommonModule, ChillaDetailsModule
  ],
  providers: [ChinchillasService],
  exports: [SingleChinchillaComponent]
})
export class SingleChinchillaModule { }
