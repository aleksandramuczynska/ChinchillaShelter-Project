import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChillaDetailsComponent } from './chilla-details.component';
import { CurrentChinchillaService } from 'src/app/core/services/current-chinchilla.service';

@NgModule({
  declarations: [ChillaDetailsComponent],
  imports: [CommonModule],
  exports: [ChillaDetailsComponent],
  providers: [CurrentChinchillaService],
})
export class ChillaDetailsModule {}
