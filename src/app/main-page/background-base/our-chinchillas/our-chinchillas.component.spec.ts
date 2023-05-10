/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurChinchillasComponent } from './our-chinchillas.component';

describe('OurChinchillasComponent', () => {
  let component: OurChinchillasComponent;
  let fixture: ComponentFixture<OurChinchillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurChinchillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurChinchillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
