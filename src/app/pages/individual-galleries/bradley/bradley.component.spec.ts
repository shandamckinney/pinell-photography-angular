import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BradleyComponent } from './bradley.component';

describe('BradleyComponent', () => {
  let component: BradleyComponent;
  let fixture: ComponentFixture<BradleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BradleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BradleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
