import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './app_forms.component.html',
  styleUrls: ['./app_forms.component.scss'],
})
export class AppFormsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  visibleForm: number = 0;

  showVolunteer() {
    this.visibleForm = 1;
  }

  showAdoption() {
    this.visibleForm = 2;
  }

  hideForms(){
    this.visibleForm = 0;
  }
}
