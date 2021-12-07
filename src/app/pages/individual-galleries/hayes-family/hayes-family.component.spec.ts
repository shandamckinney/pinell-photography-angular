import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HayesFamilyComponent } from './hayes-family.component';

describe('HayesFamilyComponent', () => {
  let component: HayesFamilyComponent;
  let fixture: ComponentFixture<HayesFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HayesFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HayesFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
