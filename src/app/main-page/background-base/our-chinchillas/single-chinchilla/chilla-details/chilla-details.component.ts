import {
  Output,
  EventEmitter,
  Component,
  HostListener,
  Input,
  OnInit,
  ElementRef,
} from '@angular/core';
import { Chinchilla } from 'src/app/core/interface/chinchilla';

@Component({
  selector: 'app-chilla-details',
  templateUrl: './chilla-details.component.html',
  styleUrls: ['./chilla-details.component.scss'],
})
export class ChillaDetailsComponent implements OnInit {
  @Input() chinchilla: Chinchilla = {} as Chinchilla;
  @Output() newVisibilityValue = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  private wasInside = true;

  passVisibility(value: boolean) {
    this.newVisibilityValue.emit(value);
  }

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.passVisibility(false);
    }
    this.wasInside = false;
  }
}
