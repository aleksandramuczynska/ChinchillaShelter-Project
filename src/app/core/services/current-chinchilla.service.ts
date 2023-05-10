import { Injectable } from '@angular/core';
import { Chinchilla } from '../interface/chinchilla';

@Injectable({
  providedIn: 'root',
})
export class CurrentChinchillaService {
  constructor() {}

  emptyChinchilla(): Chinchilla {
    return {
      name: '',
      age: NaN,
      color: '',
      image: '',
      favorite_thing: '',
    };
  }

  currentChinchilla: Chinchilla = this.emptyChinchilla();

  setChinchilla(chinchilla : Chinchilla){
    this.currentChinchilla = chinchilla;
  }

  get() {
    return this.currentChinchilla;
  }
}
