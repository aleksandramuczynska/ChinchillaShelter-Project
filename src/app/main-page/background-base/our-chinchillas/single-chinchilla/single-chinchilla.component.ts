import { Component, Input, OnInit } from '@angular/core';
import { Chinchilla } from 'src/app/core/interface/chinchilla';
import { CurrentChinchillaService } from 'src/app/core/services/current-chinchilla.service';

@Component({
  selector: 'app-single-chinchilla',
  templateUrl: './single-chinchilla.component.html',
  styleUrls: ['./single-chinchilla.component.scss'],
})
export class SingleChinchillaComponent implements OnInit {
  @Input() chinchilla: Chinchilla = {} as Chinchilla;

  constructor(private currentChinchillaService: CurrentChinchillaService) {}

  chosenChinchilla: Chinchilla =
    this.currentChinchillaService.emptyChinchilla();

  ngOnInit() {}

  visible: boolean = false;

  changeVisibility(value: boolean) {
    this.visible = value;
  }

  showDetail() {
    this.visible = !this.visible;
    this.currentChinchillaService.setChinchilla(this.chinchilla);
    this.currentChinchillaService.get();
  }
}
