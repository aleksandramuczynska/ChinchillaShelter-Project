import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomFactService {
  constructor() {}

  getFacts() {
    return [
      'There are 2 species of chinchillas: Short-tailed and Long-tailed',
      'Chinchillas live up to 20 years',
      'Chinchillas have the densest fur of all land mammals',
      'Chinchillas bathe in dust',
      'Chinchillas can shed fur to escape predators',
      'Chinchillas are highly social animals. They need at least one companion',
      'Chinchillas can jump almost 2 meters high',
      'Chinchillas are an endangered species',
      "Chinchilla's teeth continue to grow throughout their lives",
      "A chinchilla's fur is considered the softest in the world",
      'Caecotrophy is the process used by a chinchilla to digest its food twice',
      'Chinchillas can communicate with each other using barking',
      'Baby chinchillas are called kits',
    ];
  }
}
