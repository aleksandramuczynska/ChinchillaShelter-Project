import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundBaseComponent } from './background-base.component';

describe('BackgroundBaseComponent', () => {
  let component: BackgroundBaseComponent;
  let fixture: ComponentFixture<BackgroundBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
