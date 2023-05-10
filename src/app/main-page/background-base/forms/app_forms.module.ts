import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppFormsComponent } from './app_forms.component';
FormsModule

@NgModule({
  declarations: [AppFormsComponent],
  imports: [CommonModule, FormsModule],
  exports: [AppFormsComponent],
})
export class AppFormsModule {}
