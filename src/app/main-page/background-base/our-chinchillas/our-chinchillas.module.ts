import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurChinchillasComponent } from './our-chinchillas.component';
import { SingleChinchillaModule } from './single-chinchilla/single-chinchilla.module';
import { ChinchillasService } from 'src/app/core/services/chinchillas.service';



@NgModule({
  declarations: [OurChinchillasComponent],
  imports: [CommonModule, SingleChinchillaModule],
  exports: [OurChinchillasComponent],
  providers: [ChinchillasService],
})
export class OurChinchillasModule {}
