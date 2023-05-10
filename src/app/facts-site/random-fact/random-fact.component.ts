import { Component, OnInit } from '@angular/core';
import { RandomFactService } from 'src/app/core/services/random-fact.service';

@Component({
  selector: 'app-random-fact',
  templateUrl: './random-fact.component.html',
  styleUrls: ['./random-fact.component.scss'],
})
export class RandomFactComponent implements OnInit {
  constructor(private randomFactsService: RandomFactService) {}

  randomFacts: string[] = [];

  randomFact: string = '';

  randomNumber: number = NaN;
  previousNumber: number = NaN;

  generateRandomNumber() {
    this.previousNumber = this.randomNumber;
    this.randomNumber = Math.floor(
      Math.random() * this.randomFactsService.getFacts().length
    );
  }

  ngOnInit() {
    this.generateRandomNumber();
    this.randomFacts = this.randomFactsService.getFacts();
    this.randomFact = this.randomFacts[this.randomNumber];
  }

  changeFact() {
    this.generateRandomNumber();
    while (this.previousNumber === this.randomNumber) {
      this.generateRandomNumber();
    }
    this.randomFact = this.randomFacts[this.randomNumber];
  }
}
