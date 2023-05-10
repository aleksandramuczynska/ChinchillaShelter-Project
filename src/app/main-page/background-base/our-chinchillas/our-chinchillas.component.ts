import { Component, OnInit } from '@angular/core';
import { Chinchilla } from 'src/app/core/interface/chinchilla';
import { ChinchillasService } from 'src/app/core/services/chinchillas.service';

@Component({
  selector: 'app-our-chinchillas',
  templateUrl: './our-chinchillas.component.html',
  styleUrls: ['./our-chinchillas.component.scss']
})
export class OurChinchillasComponent implements OnInit {

  constructor(private chinchillasService : ChinchillasService) { }

  chinchillas : Chinchilla[] = [];


  ngOnInit(): void {
    this.chinchillas = this.chinchillasService.getChinchillas();
  }

}
