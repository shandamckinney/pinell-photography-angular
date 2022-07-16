import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielleComponent } from './danielle.component';

describe('DanielleComponent', () => {
  let component: DanielleComponent;
  let fixture: ComponentFixture<DanielleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanielleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanielleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
