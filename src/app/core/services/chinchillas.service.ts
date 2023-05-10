import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChinchillasService {

constructor() { }


  getChinchillas(){
    return [
      {
        name: 'Agatha',
        age: 6,
        color: 'grey',
        image:
          'https://images.freeimages.com/images/large-previews/8f7/chilly-chinchilla-1473844.jpg',
        favorite_thing: 'strawberries',
      },
      {
        name: 'Pina',
        age: 11,
        color: 'white-grey',
        image:
          'https://images.freeimages.com/images/large-previews/bf1/the-raisen-1473850.jpg',
        favorite_thing: 'cuddles',
      },
      {
        name: 'Umami',
        age: 3,
        color: 'brown',
        image:
          'https://images.freeimages.com/images/large-previews/404/chinchilla-dreams-1472267.jpg',
        favorite_thing: 'sleeping',
      },
      {
        name: 'Roxy',
        age: 2,
        color: 'grey-black',
        image:
          'https://images.freeimages.com/images/large-previews/ef8/grey-chinchilla-1330728.jpg',
        favorite_thing: 'playing with feathers',
      },
      {
        name: 'Lilly',
        age: 2,
        color: 'grey',
        image:
          'https://images.unsplash.com/photo-1628831901934-41570f907bcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        favorite_thing: 'waffles',
      },
      {
        name: 'Coconut',
        age: 9,
        color: 'brown',
        image:
          'https://images.unsplash.com/photo-1628832824588-dd2cc94e7ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        favorite_thing: 'exploring',
      },
    ];
  }

}
