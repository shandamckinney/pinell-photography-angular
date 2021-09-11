import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HunterAndMeganComponent } from './hunter-and-megan.component';

describe('HunterAndMeganComponent', () => {
  let component: HunterAndMeganComponent;
  let fixture: ComponentFixture<HunterAndMeganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HunterAndMeganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HunterAndMeganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
